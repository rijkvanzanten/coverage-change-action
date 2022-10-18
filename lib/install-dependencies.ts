import { exec } from "@actions/exec";

export const installDependencies = async () => {
	await exec("pnpm", ["install"]);
};
