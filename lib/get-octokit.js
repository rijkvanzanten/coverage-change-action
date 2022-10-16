import { getInput } from "@actions/core";
import { getOctokit as getOctokitInstance } from "@actions/github";

export const getOctokit = () => getOctokitInstance(getInput("github-token"));
