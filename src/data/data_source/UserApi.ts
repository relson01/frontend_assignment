import React from "react";
import { User } from "../../domain/entities/user";
import Rootstore from "../../domain/stores/Rootstore";
import { axiosClient } from "./AxiosConfig";

export default class UserApi {
  rootstore: Rootstore;
  constructor(rootstore: Rootstore) {
    this.rootstore = rootstore;
  }

  async getAllUser() {
    try {
      const { data } = await axiosClient.post("");
      this.rootstore.userStore.loadAllUser(data.users);
    } catch (e) {
      console.log("debug: failed to retrieve data", e);
    }
  }
}
