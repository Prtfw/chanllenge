// example of a test for a pure helper function using snapshot testing

import { mapIdToEmployeeName } from "./reviewForm";

const employeesDataSeed = [
  {
    first: "Stella",
    last: "Ellis",
    guid: "d6ee9507-6a7a-5d89-a92b-e8fc13c0e2f8",
  },
  {
    first: "Gavin",
    last: "Schwartz",
    guid: "98fce8dd-7420-5dad-b315-101e1ebd18c0",
  },
  {
    first: "Derek",
    last: "Walker",
    guid: "efcda8fc-a1d0-5c20-92bb-9e96d4abcf08",
  },
  {
    first: "Della",
    last: "Wagner",
    guid: "50535380-f046-5d50-acf9-8285752777b6",
  },
];

describe("mapIdToEmployeeName()", () => {
  test("Finds Employee by ID", () => {
    const { guid } = mapIdToEmployeeName("d6ee9507-6a7a-5d89-a92b-e8fc13c0e2f8", employeesDataSeed);
    expect(guid).toMatchSnapshot() // use snapshot testing after verifying result by using line below
    //toBe("d6ee9507-6a7a-5d89-a92b-e8fc13c0e2f8");
  });
});
