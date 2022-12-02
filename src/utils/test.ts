import { expect, it } from "vitest";
import { readInputOutput } from "./input";

export async function itSolvesInput(day: Day) {
	const [input, answer1, answer2] = await readInputOutput(day.yearDay);

	if (answer1) {
		it("solves part1", async () => {
			const parse = day.parsePart1;

			expect(day.solvePart1(parse(input)).toString()).toEqual(answer1);
		});
	}

	if (answer2 && day.solvePart2) {
		it("solves part2", async () => {
			const parse = day.parsePart2 || day.parsePart1;
			expect(day.solvePart2!(parse(input)).toString()).toEqual(answer2);
		});
	}
}

interface Day {
	yearDay: YearDay;
	parsePart1(text: string): any;
	solvePart1(input: any): any;
	parsePart2?(text: string): any;
	solvePart2?(input: any): any;
}

type YearDay = `${number}/${number}`;
