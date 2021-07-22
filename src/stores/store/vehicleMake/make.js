import { action, makeObservable, observable } from "mobx";

let continuousId = 0;

export default class Make {
  id: number;
  name: string;
  abbreviation: string;

  constructor(name: string, abbreviation: string) {
    this.id = continuousId++;
    this.name = name;
    this.abbreviation = abbreviation;
    makeObservable(this, {
      name: observable,
      abbreviation: observable,
      editFields: action,
    });
  }

  editFields(name: string, abbreviation: string) {
    this.name = name;
    this.abbreviation = abbreviation;
  }
}
