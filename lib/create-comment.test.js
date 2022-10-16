import { afterEach, expect, test, vi } from "vitest";
import { createComment } from "./create-comment.js";
import { getOctokit } from "./get-octokit.js";

vi.mock("./get-octokit.js", () => ({
	getOctokit: vi
		.fn()
		.mockReturnValue({ rest: { issues: { createComment: vi.fn() } } }),
}));

afterEach(() => {
	vi.clearAllMocks();
});

test("Uses octokit createComment with params from context and body", async () => {
	const octokit = getOctokit();

	const mockContext = {
		repo: {
			owner: "rijkvanzanten",
			repo: "testing",
		},
		issue: {
			number: 15,
		},
	};

	await createComment(mockContext, "Hello from my Test!");

	expect(octokit.rest.issues.createComment).toHaveBeenCalledWith({
		owner: "rijkvanzanten",
		repo: "testing",
		issue_number: 15,
		body: "Hello from my Test!",
	});
});
