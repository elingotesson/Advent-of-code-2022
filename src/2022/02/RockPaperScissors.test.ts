import { describe, expect, test } from "vitest";
import { itSolvesInput } from "../../utils/test";
import * as day from "./RockPaperScissors";

describe("Day 2: Rock Paper Scissors", async function () {
await itSolvesInput(day);

const example1 = `
A Y
B X
C Z
`;

	describe("parsePart1", () => {
		test("extracts numbers", () => {
			const parsed = [
				'A Y',
				'B X',
				'C Z'
			];
			expect(day.parsePart1(example1)).toEqual(parsed);
		});
	});

	describe("solvePart1", () => {
		test("Total score if following the anticipated strategy from the elf", () => {
			expect(day.solvePart1(day.parsePart1(example1))).toEqual(15);
		});
	});

	describe("solvePart2", () => {
		test("Total score if following the acctual strategy from the elf", () => {
			expect(day.solvePart2(day.parsePart1(example1))).toEqual(12);
		});
	});
});
