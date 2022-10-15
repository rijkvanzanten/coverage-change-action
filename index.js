import core from "@actions/core";
import github from "@actions/github";

const octokit = github.getOctokit(core.getInput("github-token"));

core.log(octokit, octokit.rest, octokit.rest.issues);

try {
	await octokit.rest.issues.createComment({
		owner: github.context.owner,
		repo: github.context.repo,
		issue_number: context.payload.number,
		body: "Hello World",
	});
} catch (error) {
	core.setFailed(error.message);
}
