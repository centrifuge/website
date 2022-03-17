import { handleCreateProof } from "./crowdloan/handleCreateProof";
import { merkleTree } from "../config/centrifuge-reward-merkle-tree";

exports.handler = handleCreateProof(merkleTree);
