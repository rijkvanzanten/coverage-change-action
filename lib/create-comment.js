import { getOctokit } from "./get-octokit.js";

export const createComment = async (context, body) => {
	const octokit = getOctokit();

	const {
		repo: { owner, repo },
		issue: { number },
	} = context;

	await octokit.rest.issues.createComment({
		owner,
		repo,
		issue_number: number,
		body,
	});
};
