import { setFailed, setOutput } from "@actions/core";
import { findCloverFiles } from "./lib/find-clover-files.js";
import { installDependencies } from "./lib/install-dependencies.js";
import { runTests } from "./lib/run-tests.js";

try {
	await installDependencies();
	await runTests();
	const files = await findCloverFiles();
	setOutput("report", files.join(", "));
} catch (error: unknown) {
	setFailed(error as string | Error);
}
