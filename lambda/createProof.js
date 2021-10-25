import { Keyring } from '@polkadot/api';
import { u8aToHex } from '@polkadot/util';
const JSONbig = require('json-bigint')({ useNativeBigInt: true, alwaysParseAsBig: true });

const TREE_PATH =  '../config/altair-reward-merkle-tree.json';
const merkleTree = JSONbig.parse(fs.readFileSync(TREE_PATH).toString());

const createProof = async id => {
  let startIndex;
  let contr = merkleTree.data.filter((val, idx) => {
    if (val.account === id) {
      startIndex = idx;
      return true;
    }

    return false;
  });

  if (startIndex === undefined || contr.length !== 1) {
    return Promise.reject('Tree not generated correctly.');
  }

  let sortedHashes = [];
  let currDepth = merkleTree.tree.length - 1;
  let index = startIndex;
  while (currDepth >= 0) {
    // Check if in this round we have the last element of this row and uneven row
    if (
      index === merkleTree.tree[currDepth].length - 1 &&
      merkleTree.tree[currDepth].length % 2 === 1
    ) {
      // Count the number of uneven rows above your row and then decide to go up- or downwards
      let numUnevenRows = 0;
      // If we are not in the last row, do the count. If we are, then there are zero uneven rows above us and
      // we need to go downwards anyways.
      if (currDepth !== 0) {
        for (let i = currDepth - 1; i >= 0; i--) {
          if (merkleTree.tree[i].length % 2 === 1) {
            numUnevenRows++;
          }
        }
      }

      let down = numUnevenRows % 2 === 0;

      // Ensure we are not in the base row of the tree.
      if (down) {
        // Check first row below yourself for unevenness, and if so take the last element
        let i = currDepth + 1;
        let found = false;
        while (i < merkleTree.tree.length) {
          const lengthThisDepth = merkleTree.tree[i].length;
          if (lengthThisDepth % 2 === 1) {
            sortedHashes.push(merkleTree.tree[i][lengthThisDepth - 1]);
            found = true;
            break;
          }
          i++;
        }
        if (!found) {
          return Promise.reject('Proof generation not working.');
        }
      } else {
        // Check first row above yourself for unevenness, and if so take the last element
        let i = currDepth - 1;
        let found = false;
        while (i >= 0) {
          const lengthThisDepth = merkleTree.tree[i].length;
          if (lengthThisDepth % 2 === 1) {
            sortedHashes.push(merkleTree.tree[i][lengthThisDepth - 1]);
            found = true;
            break;
          }
          i--;
        }
        if (!found) {
          return Promise.reject('Proof generation not working.');
        }

        index = merkleTree.tree[i].length;
        currDepth = i;
      }
    } else {
      // If we are even then push the right element, else the left one
      if (index % 2 === 0) {
        sortedHashes.push(merkleTree.tree[currDepth][index + 1]);
      } else {
        sortedHashes.push(merkleTree.tree[currDepth][index - 1]);
      }
    }

    index = (index - (index % 2)) / 2;
    currDepth--;
  }

  return {
    leafHash: merkleTree.tree[merkleTree.tree.length - 1][startIndex],
    sortedHashes: sortedHashes,
  };
};

const createMsgToSign = async (key, msg) => {
  return {
    signer: key.address,
    msg: msg,
  };
};

const getContributionAmount = async key => {
  const contr = merkleTree.data.find(
    contribution => contribution.account === key,
  );

  return contr !== undefined
    ? contr.contribution
    : Promise.reject(`Account ${key} is no contributor`);
};

exports.handler = async event => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method not allowed. Use POST.',
    };
  }

  try {
    const { address } = JSON.parse(event.body);

    const keyring = new Keyring({ type: 'sr25519' }).addFromAddress(address);
    const u8aPublicKey = keyring.publicKey;
    const hexPublicKey = u8aToHex(u8aPublicKey);

    const proof = await createProof(hexPublicKey);

    const msgToSign = await createMsgToSign(keyring, u8aPublicKey);

    const contribution = await getContributionAmount(hexPublicKey);

    return {
      statusCode: 200,
      body: JSON.stringify({
        proof,
        msgToSign,
        contribution,
      }),
    };
  } catch (error) {
    return {
      statusCode: 405,
      body: JSON.stringify({ error }),
    };
  }
};
