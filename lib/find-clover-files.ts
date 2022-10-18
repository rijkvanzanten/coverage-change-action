import { globby } from "globby";

export const findCloverFiles = async () => {
	const paths = await globby(["**/coverage/clover.xml"]);
	return paths;
};
