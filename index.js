import core from "@actions/core";
import github from "@actions/github";

const octokit = github.getOctokit(core.getInput("github-token"));

try {
	const { owner, repo, issue_number } = github.context;

	console.log(
		`Adding comment to PR ${issue_number} in repo ${repo} owned by ${owner}`
	);

	await octokit.rest.issues.createComment({
		owner,
		repo,
		issue_number,
		body: "Hello World",
	});
} catch (error) {
	core.setFailed(error);
}
