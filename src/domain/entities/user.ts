import React from "react";

type Geo = {
  latitude: number;
  longitude: number;
};
type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};
type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  profilepicture: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export class IUser implements User {
  id: number;
  name: string;
  username: string;
  email: string;
  profilepicture: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  constructor(
    id: number,
    name: string,
    username: string,
    email: string,
    profilepicture: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.profilepicture = profilepicture;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;
  }
}
