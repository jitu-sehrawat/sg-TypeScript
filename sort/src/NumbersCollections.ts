import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  compare(leftIndex: number, righIndex: number): boolean {
    return this.data[leftIndex] > this.data[righIndex];
  }

  swap(leftIndex: number, righIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[righIndex];
    this.data[righIndex] = leftHand;
  }

  get length(): number {
    return this.data.length;
  }
}
