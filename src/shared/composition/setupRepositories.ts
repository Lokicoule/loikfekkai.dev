import { githubApiAdapter, npmApiAdapter } from "./setupAdapters";
import { GitHubRepository } from "../repositories/github/GitHubRepository";
import { NpmRepository } from "../repositories/npm/NpmRepository";

const githubRepository = new GitHubRepository(githubApiAdapter);
const npmRepository = new NpmRepository(npmApiAdapter);

export { githubRepository, npmRepository };
