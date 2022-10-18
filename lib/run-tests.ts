import { exec } from "@actions/exec";

export const runTests = async () => {
	await exec("pnpm", ["-r", "run", "coverage"]);
};
