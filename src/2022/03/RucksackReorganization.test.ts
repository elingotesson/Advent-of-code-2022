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
				['vJrwpWtwJgWr', 'hcsFMMfFFhFp'],
				['jqHRNqRjqzjGDLGL', 'rsFMfFZSrLrFZsSL'],
				['PmmdzqPrV', 'vPwwTWBwg'],
				['wMqvLMZHhHMvwLH', 'jbvcjnnSBnvTQFn'],
				['ttgJtRGJ', 'QctTZtZT'],
				['CrZsJsPPZsGz', 'wwsLwLmpwMDw']
			];
			expect(day.parsePart1(example1)).toEqual(parsed);
		});
	});

	describe("solvePart1", () => {
		test("the sum of the priorities of the elfs rucksack item types", () => {
			expect(day.solvePart1(day.parsePart1(example1))).toEqual(157);
		});
	});
});
