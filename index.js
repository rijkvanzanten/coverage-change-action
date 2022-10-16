import { setFailed } from "@actions/core";
import { context } from "@actions/github";
import { createComment } from "./lib/create-comment.js";

try {
	await createComment(context, "Hello!!");
} catch (error) {
	setFailed(error);
}
