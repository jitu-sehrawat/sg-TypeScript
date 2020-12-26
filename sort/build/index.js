"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Bubble Sort
var NumbersCollections_1 = require("./NumbersCollections");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollections_1.NumbersCollection([100, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
console.log(linkedList.print());
