import { describe, expect, it } from "vitest";
import { filterWorks, WorkProps } from "./WorksViewModel";

const work = (id: string, category: WorkProps["category"]): WorkProps =>
  ({ id, category, name: id, tag: "", description: "", technologiesUsed: { stack: [] }, socialLinks: [] }) as WorkProps;

describe("filterWorks", () => {
  const works = [work("a", "backend"), work("b", "frontend"), work("c", "tools")];

  it("returns everything for the all filter", () => {
    expect(filterWorks(works, "all")).toHaveLength(3);
  });

  it("keeps only the matching category", () => {
    expect(filterWorks(works, "frontend").map((w) => w.id)).toEqual(["b"]);
  });
});
