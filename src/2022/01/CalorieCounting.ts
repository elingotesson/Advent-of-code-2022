export const yearDay = "2022/01";

type Input = number[][];

function calculateSumInArray(input: number[]) {
	return input.reduce((a, b) => a + b, 0);
}

function findThreeLargestNumbers(array: number[]) {
  return [...array].sort((a, b) => b - a).slice(0, 3);
}

export function parsePart1(text: string): Input {
	return text.split("\n\n").map((data) => data.split("\n").filter(Boolean).map((data) => Number(data)));
}

export function solvePart1(input: Input) {
	const sum = input.map((item) => calculateSumInArray(item));
	return Math.max(...sum);
}

export function solvePart2(input: Input) {
	const threeLargestNumbers = findThreeLargestNumbers(input.map((item) => calculateSumInArray(item)));
	const sum = threeLargestNumbers.reduce((a, b) => a + b, 0);

	return sum;
}
