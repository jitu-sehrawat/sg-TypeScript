import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  compare(leftIndex: number, righIndex: number): boolean {
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[righIndex].toLocaleLowerCase()
    );
  }

  swap(leftIndex: number, righIndex: number): void {
    const characters = this.data.split('');

    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[righIndex];
    characters[righIndex] = leftHand;

    this.data = characters.join('');
  }

  get length(): number {
    return this.data.length;
  }
}
