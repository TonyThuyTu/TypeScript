export function sum(...numbers: number[]): number {
  return numbers.reduce((sum, number) => sum + number, 0);
}

export function multiply(...numbers: number[]): number {
  return numbers.reduce((product, number) => product * number, 1);
}

export function sortAsc(...numbers: number[]): number[] {
  return numbers.sort((a, b) => a - b);
}

export function sortDesc(...numbers: number[]): number[] {
  return numbers.sort((a, b) => b - a);
}

export default {
    sum,
    multiply,
    sortAsc,
    sortDesc
}