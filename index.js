import core from "@actions/core";
import github from "@actions/github";

const octokit = github.getOctokit(core.getInput("github-token"));

try {
	await octokit.issues.createComment({
		repo: github.context.repo,
		owner: github.context.owner,
		body: "Hello World",
		issue_number: context.payload.number,
	});
} catch (error) {
	core.setFailed(error.message);
}
