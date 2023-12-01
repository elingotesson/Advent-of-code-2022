import { describe, expect, test } from "vitest";
import { itSolvesInput } from "../../utils/test";
import * as day from "./Trebuchet";

describe("Day 1: Trebutchet", async function () {
	await itSolvesInput(day);

	const example1 = `1abc2
	pqr3stu8vwx
	a1b2c3d4e5f
	treb7uchet`;

	describe("parsePart1", () => {
		test("extracts numbers", () => {
			const parsed = [
				12, 38, 15, 77
			];
			expect(day.parsePart1(example1)).toEqual(parsed);
		});
	});

	describe("solvePart1", () => {
		test("Calibration value for Trebutchet. In the example above, this is 142", () => {
			expect(day.solvePart1(day.parsePart1(example1))).toEqual(142);
		});
	});

	const example2 = `two1nine
	eightwothree
	abcone2threexyz
	xtwone3four
	4nineeightseven2
	zoneight234
	7pqrstsixteen`;

	describe("parsePart2", () => {
		test("extracts numbers", () => {
			const parsed = [
				29, 83, 13, 24, 42, 14, 76
			];
			expect(day.parsePart2(example2)).toEqual(parsed);
		});
	});

	describe("solvePart2", () => {
		test("Calibration value for Trebutchet. In the example above, this is 281", () => {
			expect(day.solvePart2(day.parsePart2(example2))).toEqual(281);
		});
	});
});
