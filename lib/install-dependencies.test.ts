import { exec } from "@actions/exec";
import { afterEach, expect, test, vi } from "vitest";
import { installDependencies } from "./install-dependencies.js";

vi.mock("@actions/exec");

afterEach(() => {
	vi.clearAllMocks();
});

test("Installs dependencies using pnpm", async () => {
	await installDependencies();
	expect(exec).toHaveBeenCalledWith("pnpm", ["install"]);
});
