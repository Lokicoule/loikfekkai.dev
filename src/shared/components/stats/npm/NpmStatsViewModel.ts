import type { NpmStats } from "../../../repositories/npm/types";

export interface NpmStatsAttributes {
  packageName: string;
  stats?: NpmStats;
  loading?: boolean;
}

export class NpmStatsViewModel {
  public attributes: NpmStatsAttributes;

  constructor(attributes: NpmStatsAttributes) {
    this.attributes = attributes;
  }
}
