export const yearDay = "2022/03";

type Input = string[];
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function calculateSumOfArray(input: number[]) {
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

function getPriority(characters: string[]): number[] {
	return characters.map((character) =>  alphabet.indexOf(character) + 1);
}

function divideIntoGroups(array: string[]) {
	const groups = [];
	const length = array.length/3;

	for(var i = 0; i < length; i++) {
		groups.push(array.splice(0, 3));
	}

	return groups;
}

function findCommonBadge(group: string[]): string {
	const restWords = group.slice(1);
	const result = group[0].split('').filter(char =>
  restWords.every(word => word.includes(char)))
	return Array.from(new Set(result)).pop() ?? '';
}

export function parsePart1(text: string): Input {
 	return text.split("\n").filter(Boolean);
}

export function solvePart1(input: Input) {
	const dividedLines = input.map((line) => divideStringEqually(line));
	const characters = dividedLines.map((word) => findCommonCharacter(word));
	const priorities = getPriority(characters);

	return calculateSumOfArray(priorities);
}

export function solvePart2(input: Input) {
	const groups = divideIntoGroups(input);
	const badges = groups.map((group) => findCommonBadge(group));
	const priorityOfBadges = getPriority(badges);

	return calculateSumOfArray(priorityOfBadges);
}
