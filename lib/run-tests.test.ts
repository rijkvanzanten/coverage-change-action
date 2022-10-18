import { exec } from "@actions/exec";
import { afterEach, expect, test, vi } from "vitest";
import { runTests } from "./run-tests.js";

vi.mock("@actions/exec");

afterEach(() => {
	vi.clearAllMocks();
});

test("Installs dependencies using pnpm", async () => {
	await runTests();
	expect(exec).toHaveBeenCalledWith("pnpm", ["-r", "run", "coverage"]);
});
