import { setFailed, setOutput } from "@actions/core";
import { findCloverFiles } from "./lib/find-clover-files.js";
import { installDependencies } from "./lib/install-dependencies.js";
import { runTests } from "./lib/run-tests.js";
import { parseCloverFile } from "./lib/parse-clover-file.js";

try {
	await installDependencies();
	await runTests();
	const files = await findCloverFiles();
	const coverage = new Map<string, number>();
	await Promise.all(files.map((file) => parseCloverFile(file, coverage)));
	setOutput("report", JSON.stringify(Array.from(coverage.entries())));
} catch (error: unknown) {
	setFailed(error as string | Error);
}
