export const yearDay = "2023/01";

type Input = ( number | undefined)[];

export function parsePart1(text: string): Input {
	return text.split("\n").map((line) => {
    let str = line.match(/\d+/g)?.join('')!;
    let nr = parseInt(str?.slice(0, 1).concat(str?.slice(-1)));
    return nr;
  });
}

export function solvePart1(input: Input): number {
  let sum = 0;
  input.forEach(nr => {
    sum += nr!;
  });
	return sum;
}

const digits: Record<string, string> = {
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9'
}

const replaceWordWithDigit = (str: string): string => {
  const regExp = new RegExp('one|two|three|four|five|six|seven|eight|nine', 'g');
  return str.replaceAll(regExp, (m) =>  m.slice(0, 1) + m + m.slice(-1)).replaceAll(regExp, (m) => digits[m]);
}

export function parsePart2(text: string): Input {
	return text.split("\n").map((line) => {
      let formattedLine = replaceWordWithDigit(line);
      let str = formattedLine.match(/\d+/g)?.join('')!;

      if (str.length > 1) {
        let nr = parseInt(str.slice(0, 1).concat(str.slice(-1)));
        return nr;
      }

      let nr = parseInt(str + str);
      return nr;

  }).filter(Boolean);
}

export function solvePart2(input: Input): number {
  let sum = 0;
  input.forEach(nr => {
    sum += nr!;
  });
	return sum;
}
