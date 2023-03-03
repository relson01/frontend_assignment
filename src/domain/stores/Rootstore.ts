import React from "react";
import UserApi from "../../data/data_source/UserApi";
import UserStore from "./Userstore";

export default class Rootstore {
  userStore: UserStore;
  constructor() {
    this.userStore = new UserStore(this);
  }
}

export const rootStore = new Rootstore();
