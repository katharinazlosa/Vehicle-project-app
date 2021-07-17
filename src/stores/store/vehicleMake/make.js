import { action, makeObservable, observable } from "mobx";

let continuousId = 0;

export default class Make {
  id: number;
  name: string;
  abbreviation: string;

  constructor(name: string, abbreviation: string) {
    makeObservable(this, {
      name: observable,
      abbreviation: observable,
      editFields: action,
    });
    this.id = continuousId++;
    this.name = name;
    this.abbreviation = abbreviation;
  }

  editFields(name: string, abbreviation: string) {
    this.name = name;
    this.abbreviation = abbreviation;
  }
}
