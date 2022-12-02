export const yearDay = "2022/02";

type Input = string[];

type Shapes = 'rock' | 'paper' | 'scissors';

const Points = {
	'win': 6,
	'draw': 3,
	'loose': 0,
	'rock': 1,
	'paper': 2,
	'scissors': 3,
}

/**
 * Calculation according to the anticipated strategy
 */
function getShape(round: string): Shapes | '' {
	const lastLetter = round.slice(-1);
	switch(lastLetter) {
		case 'X':
			return 'rock';
		case 'Y':
			return 'paper';
		case 'Z':
			return 'scissors';
		default:
			return '';
	}
}

const winMatchers = ['A Y', 'B Z', 'C X'];
const drawMatchers = ['A X', 'B Y', 'C Z'];
const looseMatchers = ['A Z', 'B X', 'C Y'];

function calculateScore1(round: string): number {
	let pointOfRound = 0;
	const shape = getShape(round);
	const pointForShape = shape ? Points[shape] : 0;

	if (winMatchers.includes(round)) pointOfRound = Points['win'];
	if (drawMatchers.includes(round)) pointOfRound = Points['draw'];
	if (looseMatchers.includes(round)) pointOfRound = Points['loose'];

	return pointOfRound + pointForShape;
}

/**
 * Calculation according to the acctual strategy
 */
 function figureOutShape(round: string, point: number): Shapes | '' {
	const firstLetter = round.charAt(0);

	if (point === Points['loose']) {
		switch(firstLetter) {
			case 'A':
				return 'scissors';
			case 'B':
				return 'rock';
			case 'C':
				return 'paper';
			default:
				return '';
		}
	}

	if (point === Points['draw']) {
		switch(firstLetter) {
			case 'A':
				return 'rock';
			case 'B':
				return 'paper';
			case 'C':
				return 'scissors';
			default:
				return '';
		}
	}

	if (point === Points['win']) {
		switch(firstLetter) {
			case 'A':
				return 'paper';
			case 'B':
				return 'scissors';
			case 'C':
				return 'rock';
			default:
				return '';
		}
	}

	return '';

}

function calculateScore2(round: string): number {
	const lastLetter = round.slice(-1);
	let pointOfRound = 0;

	if (lastLetter === 'Z') pointOfRound = Points['win'];
	if (lastLetter === 'Y') pointOfRound = Points['draw'];
	if (lastLetter === 'X') pointOfRound = Points['loose'];

	const shape = figureOutShape(round, pointOfRound);
	const pointForShape = shape ? Points[shape] : 0;

	return pointOfRound + pointForShape;
}

function calculateSumOfArray (input: number[]) {
	return input.reduce((a, b) => a + b, 0);
}

export function parsePart1(text: string): Input {
	return text.split("\n").filter(Boolean);
}

export function solvePart1(input: Input) {
	const pointsFromEachRound = input.map((item) => calculateScore1(item));
	const sumOfPoints = calculateSumOfArray(pointsFromEachRound);
	return sumOfPoints;
}

export function solvePart2(input: Input) {
	const pointsFromEachRound = input.map((item) => calculateScore2(item));
	const sumOfPoints = calculateSumOfArray(pointsFromEachRound);
	return sumOfPoints;
}


