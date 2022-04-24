import "mocha";
import {expect} from "chai";
// import {CreatorClass} from "../../src/modi20_04";
import {AddMapReduce} from "../../src/modi20_04";
import {SubMapReduce} from "../../src/modi20_04";
import {ProdMapReduce} from "../../src/modi20_04";
import {DivMapReduce} from "../../src/modi20_04";
// import {clientCode} from "../../src/modi20_04";

describe('AddMapReduce', () => {
  it('should add', () => {
    expect(new AddMapReduce([1, 2, 3]).run()).to.be.eq([6]);
  });
});
describe('SubMapReduce', () => {
  it('should substract', () => {
    expect(new SubMapReduce([1, 2, 3]).run()).to.be.eq([-6]);
  });
});
describe('ProdMapReduce', () => {
  it('should multiply', () => {
    expect(new ProdMapReduce([1, 2, 3]).run()).to.be.eq([6]);
  });
});
describe('DivMapReduce', () => {
  it('should divide', () => {
    expect(new DivMapReduce([1, 2, 3]).run()).to.be.eq([0.16666666666666666]);
  });
});

