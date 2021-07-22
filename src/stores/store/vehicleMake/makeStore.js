import { action, computed, makeAutoObservable, makeObservable, observable } from "mobx";
import DataStore from "../dataStore";
import Make from "./make";

export default class MakeStore {
  makeList: Make[] = [];
  dataStore: DataStore;

  constructor(dataStore: DataStore) {
    makeObservable(this, {
      makeList: observable,
      allMakes: computed,
      createMake: action,
    });
  }

  get allMakes() {
    return this.makeList.slice();
  }

  createMake(name: string, abbreviation: string) {
    this.makeList.push(new Make(name, abbreviation));
  }
}
