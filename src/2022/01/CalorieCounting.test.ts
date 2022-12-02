import { describe, expect, test } from "vitest";
import { itSolvesInput } from "../../utils/test";
import * as day from "./CalorieCounting";

describe("Day 1: CalorieCounting", async function () {
	await itSolvesInput(day);

	const example1 = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

	describe("parsePart1", () => {
		test("extracts numbers", () => {
			const parsed = [
				[1000, 2000, 3000],
				[4000],
				[5000, 6000],
				[7000, 8000, 9000],
				[10000],
			];
			expect(day.parsePart1(example1)).toEqual(parsed);
		});
	});

	describe("solvePart1", () => {
		test("Elf carrying the most Calories. In the example above, this is 24000", () => {
			expect(day.solvePart1(day.parsePart1(example1))).toEqual(24000);
		});
	});

	describe("solvePart2", () => {
		test("The sum of the Calories carried by these three elves is 45000", () => {
			expect(day.solvePart2(day.parsePart1(example1))).toEqual(45000);
		});
	});
});
