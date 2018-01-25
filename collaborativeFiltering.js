/*
 * @author: Austin Shin
 * A file testing collaborative filtering
 */
const { moviesByRating, movieUserRatings } = require('./data.js');
const expect = require('expect.js');

// create some sort of mock data
/*
const mockDataSet = {
  // user : { listingItemReference(points to a listing item reference) : rating (0-5)}
  Austin : { LID1 : 5, LID2 : 4, LID3 : 3, LID4 : 4, LID5 : 1, LID6 : 4, LID7: 3, LID8: 1, LID9: 5, LID10: 3 },
  Ben : { LID1 : 3, LID2 : 2, LID3 : 5, LID4 : 1, LID5 : 2, LID6 : 1, LID7: 5, LID8: 4, LID9: 3, LID10: 5 },
  Chase : { LID1 : 1, LID2 : 2, LID3 : 5, LID4 : 3, LID5 : 4, LID6 : 5, LID7: 1, LID8: 2, LID9: 4, LID10: 3 },
  Kayleigh : { LID1 : 4, LID2 : 3, LID3 : 5, LID4 : 2, LID5 : 2, LID6 : 5, LID7: 2, LID8: 5, LID9: 3, LID10: 3 },
  MissingCases: { LID3 : 5, LID5 : 4, LID7 : 1, LID : 2 }
} */
// console.log(moviesByRating);
// console.log(movieUserRatings)

// given two data points: P = (p1, p2), Q = (q1, q2)
//  Euclidean.findEuclideanDistance([[p1, q1], [p2, q2]]);

const calculateEuclideanDistance = arr => {
  const p = arr[0];
  const q = arr[1];
  return Math.sqrt((q[1] - p[1]) ** 2 + (q[0] - p[0]) ** 2);
};
const calculateEuclideanSimilarity = arr => {
  const distance = calculateEuclideanDistance(arr);
  // can do a proportion or a cosine conversion?
  // higher it is to 1, more similar it is.
  // lower it is to 0, more dissimilar it is
  return 1 / (1 + distance);
};

const dotProduct = (vectorA, vectorB) => {
  if (!Array.isArray(vectorA) || !Array.isArray(vectorB)) {
    throw new Error('arguments must be valid vectors (arrays)');
  }
  if (vectorA.length !== vectorB.length) {
    throw new Error('vectors (arrays) must match length');
  }
  let sum = 0;
  for (let i = 0; i < vectorA.length; i++) {
    sum += vectorA[i] * vectorB[i];
  }
  return sum;
};

const magnitude = vector => {
  let sum = 0;
  for (let i = 0; i < vector.length; i++) {
    sum += Math.pow(vector[i], 2);
  }
  return Math.sqrt(sum);
};

// to find degree do arccos(result)
const calculateCosineSimilarity = (vectorA, vectorB) => {
  const dotProd = dotProduct(vectorA, vectorB);
  const magnitudeA = magnitude(vectorA);
  const magnitudeB = magnitude(vectorB);

  return dotProd / (magnitudeA * magnitudeB);
};

// find some sort of intersection between two iterables
const findIntersectionAndUnion = (iterable1, iterable2) => {
  const storage = {};
  const storage2 = {};
  for (let i = 0; i < iterable1.length; i++) {
    if (storage.hasOwnProperty(iterable1[i])) {
      storage[iterable1[i]] = storage[iterable1[i]] + 1;
    } else {
      storage[iterable1[i]] = 1;
    }
    if (!storage2.hasOwnProperty(iterable1[i])) {
      storage2[iterable1[i]] = 0;
    }
  }
  for (let j = 0; j < iterable2.length; j++) {
    if (storage2.hasOwnProperty(iterable2[j])) {
      storage2[iterable2[j]] = storage2[iterable2[j]] + 1;
    } else {
      storage2[iterable2[j]] = 1;
    }
    if (!storage.hasOwnProperty(iterable2[j])) {
      storage[iterable2[j]] = 0;
    }
  }
  const vectorA = [];
  const vectorB = [];
  Object.keys(storage).map((key, index) => {
    vectorA.push([key, storage[key]]);
    vectorB.push([key, storage2[key]]);
  });
  return [vectorA, vectorB];
};

let str1 = "Julie loves me more than Linda loves me";
let str2 = "Jane likes me more than Julie loves me";

let y = findIntersectionAndUnion(str1.split(' '), str2.split(' '));
console.log(y);


const findPearsonCorrelation = data => {};

// smaller the distance is, more similar they are for that product.
// calculateEuclideanDistance(mockDataSet);

module.exports = {
  calculateEuclideanDistance,
  calculateEuclideanSimilarity,
  dotProduct,
  magnitude,
  calculateCosineSimilarity,
};
