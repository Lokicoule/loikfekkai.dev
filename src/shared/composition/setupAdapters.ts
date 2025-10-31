import { GitHubApiAdapter } from "../adapters/GitHubApiAdapter";
import { NpmApiAdapter } from "../adapters/NpmApiAdapter";

const githubApiAdapter = new GitHubApiAdapter();
const npmApiAdapter = new NpmApiAdapter();

export { githubApiAdapter, npmApiAdapter };
