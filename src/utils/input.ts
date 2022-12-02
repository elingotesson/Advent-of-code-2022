import fs from "fs/promises";
import path from "path";

type YearDay = `${number}/${number}`;

export async function readInputOutput(yearDay: YearDay) {
  async function readFile(name: string) {
    const filepath = path.join(__dirname, `../${yearDay}/${name}`);
    if (!fs.stat(filepath)) return "";
    const content = await fs.readFile(filepath, "utf-8");
    return content.trim();
  }

  return await Promise.all([
    readFile("input.txt"),
    readFile("answer1.txt"),
    readFile("answer2.txt"),
  ]);
}
