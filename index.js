import core from "@actions/core";
import github from "@actions/github";

const octokit = github.getOctokit(core.getInput("github-token"));

try {
	const {
		repo: { owner, repo },
		issue: { number },
	} = github.context;

	console.log(
		`Adding comment to PR ${number} in repo ${repo} owned by ${owner}`
	);

	await octokit.rest.issues.createComment({
		owner,
		repo,
		issue_number: number,
		body: "Hello World",
	});
} catch (error) {
	core.setFailed(error);
}
