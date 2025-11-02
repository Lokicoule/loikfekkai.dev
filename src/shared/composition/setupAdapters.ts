import { GitHubApiAdapter } from "../adapters/GitHubApiAdapter";
import { NpmApiAdapter } from "../adapters/NpmApiAdapter";

const githubAdapter = new GitHubApiAdapter();
const npmAdapter = new NpmApiAdapter();

export { githubAdapter, npmAdapter };
