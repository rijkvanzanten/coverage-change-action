import { setFailed, setOutput } from "@actions/core";
import { context } from "@actions/github";
import { runTests } from "./lib/run-tests.js";
import { findCloverFiles } from "./lib/find-clover-files.js";

try {
	await runTests();
	const cloverFiles = await findCloverFiles();
	setOutput("report", "hello");
} catch (error) {
	setFailed(error);
}
