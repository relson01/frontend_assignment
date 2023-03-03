import { action, computed, observable, ObservableMap } from "mobx";
import React from "react";
import UserApi from "../../data/data_source/UserApi";
import { IUser, User } from "../entities/user";
import Rootstore from "./Rootstore";

export default class UserStore {
  isLogin: boolean = false;
  userApi: UserApi;

  @observable byId = new Map() as ObservableMap<number, User>;
  @observable activeUserId: number | undefined;

  constructor(rootstore: Rootstore) {
    this.userApi = new UserApi(rootstore);
  }

  loadAllUser(user: any[]) {
    user.forEach((val) => this.byId.set(val.id, val));
  }
  @computed get all() {
    return Array.from(this.byId.values());
  }

  @action.bound
  setCurrentActiveUserId(id: number) {
    this.activeUserId = id;
    this.isLogin = true;
  }

  @action.bound
  getCurrentActiveUserId() {
    return this.activeUserId;
  }

  @action.bound
  getCurrentActiveUser() {
    const data = Array.from(this.byId.values());

    return data.filter((val, key) => key + 1 === this.getCurrentActiveUserId());
  }
}
