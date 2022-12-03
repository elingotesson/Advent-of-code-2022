export const yearDay = "2022/03";

type Input = string[][];
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function calculateSumInArray(input: number[]) {
	return input.reduce((a, b) => a + b, 0);
}

function findCommonCharacter(strings: string[]): string {
	const str1 = strings[0];
	const str2 = strings[1];
	const reg = new RegExp("["+ str2 +"]", 'g')
	return str1.match(reg)?.pop() || '';
}

function divideStringEqually(string: string) {
	let wordLength = (string.length * 0.5).toString();
	let regexp = new RegExp('[a-z]{0,' + wordLength + '}', 'gi',);
	return string.match(regexp)?.filter(Boolean) ?? [];
}

export function parsePart1(text: string): Input {
	const lines = text.split("\n").filter(Boolean);
	return lines.map((line) => divideStringEqually(line));
}

export function solvePart1(input: Input) {
	const characters = input.map((word) => findCommonCharacter(word));
	const priorities = characters.map((character) => {
		return alphabet.indexOf(character) + 1;
	});

	return calculateSumInArray(priorities);
}

export function solvePart2(input: Input) {
	return input;
}
