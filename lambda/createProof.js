import { handleCreateProof } from "./crowdloan/handleCreateProof";
import { merkleTree } from "../config/altair-reward-merkle-tree";

exports.handler = handleCreateProof(merkleTree);
