const expect = require('expect.js');
const assert = require('assert');
const cf = require('../collaborativeFiltering.js');

describe('dot product', () => {
  it('should solve a dot product', () => {
    expect(cf.dotProduct([4, 8, 10], [9, 2, 7])).to.equal(122);
  });
  it('should solve a dot product', () => {
    expect(cf.dotProduct([4, 8, 10], [9, 2, 7])).to.equal(122);
  });
});

describe('magnitude', () => {
  it('should find the 2d vector magnitude', () => {
    expect(cf.magnitude([6, 8])).to.equal(10);
  });
  it('should find the 2d vector magnitude', () => {
    expect(cf.magnitude([3, 4])).to.equal(5);
  });
  it('should find the 3d vector magnitude', () => {
    expect(cf.magnitude([2, -4, 6])).to.equal(7.483314773547883);
  });
  it('should find the 8d vector magnitude', () => {
    expect(cf.magnitude([3, 4, 1, 5, 8, -1, 3, 5])).to.equal(12.24744871391589);
  });
});

describe('calculateCosineSimilarity', () => {
  it('should calculate cosine similarity', () => {
    expect(cf.calculateCosineSimilarity([1,2,3],[4,5,6])).to.equal(0.9746318461970762);
  });
  it('should calculate cosine similarity 2', () => {
    expect(cf.calculateCosineSimilarity([1, 1, 0],[1, 0, 1])).to.equal(0.4999999999999999);
  });
  it('should calculate cosine similarity 3', () => {
    expect(cf.calculateCosineSimilarity([2, 1, 0, 2, 0, 1, 1, 1],[2, 1, 1, 1, 1, 0, 1, 1])).to.equal(0.8215838362577491);
  });

});

describe('calculateEuclideanSimilarity', () => {
  it('should find Euclidean Similarity', () => {
    expect(cf.calculateEuclideanSimilarity([[5, 3], [5, 1]])).to.equal(1/3);
  });
});
