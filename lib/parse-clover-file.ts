import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import sax from "sax";

export const parseCloverFile = async (
	cloverFile: string,
	accumulator: Map<string, number>
) => {
	const fileStream = createReadStream(cloverFile);
	const reader = sax.createStream();

	let currentFile: string | null = null;

	reader.on("opentag", (node) => {
		if (node.name === "FILE") {
			currentFile = node.attributes["PATH"] as string;
		}

		if (node.name === "METRICS" && currentFile) {
			const total =
				Number(node.attributes["STATEMENTS"]) +
				Number(node.attributes["CONDITIONALS"]) +
				Number(node.attributes["METHODS"]);

			const covered =
				Number(node.attributes["COVEREDSTATEMENTS"]) +
				Number(node.attributes["COVEREDCONDITIONALS"]) +
				Number(node.attributes["COVEREDMETHODS"]);

			accumulator.set(currentFile, (covered / total) * 100);
			currentFile = null;
		}
	});

	reader.on("end", () => reader.emit("finish"));

	await pipeline(fileStream, reader);
};
