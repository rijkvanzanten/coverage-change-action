import { getInput } from "@actions/core";
import { getOctokit as getOctokitInstance } from "@actions/github";
import { afterEach, expect, test, vi } from "vitest";
import { getOctokit } from "./get-octokit.js";

vi.mock("@actions/core");
vi.mock("@actions/github");

afterEach(() => {
	vi.clearAllMocks();
});

test('Creates octokit using "github-token" input', () => {
	const mockInstance = {};

	vi.mocked(getInput).mockReturnValue("test-token");
	vi.mocked(getOctokitInstance).mockReturnValue(mockInstance);

	const octokit = getOctokit();

	expect(getInput).toHaveBeenCalledWith("github-token");
	expect(getOctokitInstance).toHaveBeenCalledWith("test-token");
	expect(octokit).toBe(mockInstance);
});
