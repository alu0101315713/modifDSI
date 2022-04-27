import {Reader} from '../src/modi27_04/app';
import "mocha";
import {expect} from "chai";

describe("Reader", () => {
  it("should read", () => {
    const fichero = new Reader('helloworld.txt');
    expect(fichero.read()).to.be.eq(undefined);
  });
  it("should grep", () => {
    const fichero = new Reader('helloworld.txt');
    expect(fichero.grep()).to.be.eq(undefined);
  });
  it("should observe", () => {
    const fichero = new Reader('helloworld.txt');
    expect(fichero.observe()).to.be.eq(undefined);
  });
  it("should ls", () => {
    const fichero = new Reader('helloworld.txt');
    expect(fichero.ls()).to.be.eq(undefined);
  });
});
