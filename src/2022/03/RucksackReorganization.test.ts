import { describe, expect, test } from "vitest";
import { itSolvesInput } from "../../utils/test";
import * as day from "./RucksackReorganization";

describe("Day 3: Rucksack Reorganization", async function () {
await itSolvesInput(day);

const example1 = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;

	describe("parsePart1", () => {
		test("extracts strings", () => {
			const parsed = [
				'vJrwpWtwJgWrhcsFMMfFFhFp',
				'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
				'PmmdzqPrVvPwwTWBwg',
				'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
				'ttgJtRGJQctTZtZT',
				'CrZsJsPPZsGzwwsLwLmpwMDw'
			];
			expect(day.parsePart1(example1)).toEqual(parsed);
		});
	});

	describe("solvePart1", () => {
		test("the sum of the priorities of the elfs rucksack item types", () => {
			expect(day.solvePart1(day.parsePart1(example1))).toEqual(157);
		});
	});

	describe("solvePart2", () => {
		test("The sum of elfs rucksack security badges is 70", () => {
			expect(day.solvePart2(day.parsePart1(example1))).toEqual(70);
		});
	});
});
