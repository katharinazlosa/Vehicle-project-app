import { action, computed, makeObservable, observable } from "mobx";
import RootStore from "../../rootStore";
import Make from "./make";

export default class MakeStore {
  makeList: Make[] = [];
  rootStore: RootStore;

  constructor(makeList, rootStore: RootStore) {
    makeObservable(this, {
      makeList: observable,
      rootStore: observable,
      allMakes: computed,
      createMake: action,
    });
    this.rootStore = rootStore;
  }

  get allMakes() {
    return this.makeList.slice();
  }

  createMake(name: string, abbreviation: string) {
    this.makeList.push(new Make(name, abbreviation));
  }
}
