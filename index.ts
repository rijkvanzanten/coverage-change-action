import { setFailed, setOutput } from "@actions/core";
import { findCloverFiles } from "./lib/find-clover-files.js";
import { runTests } from "./lib/run-tests.js";

try {
	await runTests();
	await findCloverFiles();
	setOutput("report", "hello");
} catch (error: unknown) {
	setFailed(error as string | Error);
}
