import { test, expect, afterEach, vi } from "vitest";
import { globby } from "globby";
import { findCloverFiles } from "./find-clover-files.js";

vi.mock("globby");

afterEach(() => {
	vi.clearAllMocks();
});

test("Retrieves all clover.xml file paths using Globby", async () => {
	vi.mocked(globby).mockResolvedValueOnce(["test-1", "test-2"]);
	const res = await findCloverFiles();
	expect(globby).toHaveBeenCalledWith(["**/coverage/clover.xml"]);
	expect(res).toStrictEqual(["test-1", "test-2"]);
});
