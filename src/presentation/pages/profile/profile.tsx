import {
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Rootstore from "../../../domain/stores/Rootstore";
import "./profile.css";
interface Props {
  rootstore: Rootstore;
}

const Profile: React.FC<Props> = (props) => {
  const [user, setUser] = useState(
    props.rootstore.userStore.getCurrentActiveUser()[0]
  );
  useEffect(() => {
    const pathname = window.location.pathname;
    // console.log(pathname.split("/")[2]);
    console.log();
  }, []);

  return (
    <div className="w-full px-10">
      <div className="flex flex-row justify-between w-full">
        <div className="text-[#545454] text-xl font-bold ">Profile</div>
        <Menu>
          <MenuButton>
            <div>
              <img
                src={user.profilepicture}
                height={30}
                width={30}
                className={"rounded-full inline-block"}
              />
              <span className="text-[#545454] font-semibold pl-4">
                {user.name}
              </span>
            </div>
          </MenuButton>
          <MenuList className="flex flex-col items-center">
            <img
              src={user.profilepicture}
              height={90}
              width={90}
              className={"rounded-full inline-block mt-8 mb-4"}
            />
            <div>{user.name}</div>
            <div>{user.email}</div>
            <Divider
              orientation="horizontal"
              className="pt-8"
              borderColor={"#e8e8e8"}
            />
            <Divider
              orientation="horizontal"
              className="pt-8"
              borderColor={"#e8e8e8"}
            />
            <Button
              bgColor="#d55151"
              color="white"
              variant="solid"
              borderRadius="9999px"
            >
              Sign out
            </Button>
          </MenuList>
        </Menu>
      </div>

      <Divider
        orientation="horizontal"
        className="pt-8"
        borderColor={"#e8e8e8"}
      />

      <div className="flex flex-row h-full w-full pt-8 ">
        <div className="w-96">
          <img
            src={user.profilepicture}
            alt=""
            height={200}
            width={200}
            className={"rounded-full mx-auto"}
          />
          <div className="text-[#545454] text-xl font-bold w-full text-center">
            {user.name}
          </div>
          <ul className="alignTitle title">
            <li>
              <span>Username</span>
              {user.username}
            </li>
            <li>
              <span>e-mail</span>
              {user.email}
            </li>
            <li>
              <span>Phone</span>
              {user.phone}
            </li>
            <li>
              <span>Website</span>
              {user.website}
            </li>
          </ul>

          <Divider
            orientation="horizontal"
            className="pt-8"
            borderColor={"#e8e8e8"}
          />

          <div className="text-[#a4a4a4] text-xl font-semibold text-center">
            {" "}
            Company
          </div>

          <ul className="alignTitle title">
            <li>
              <span>Name</span>
              {user.company.name}
            </li>
            <li>
              <span>catchphrase</span>
              {user.company.catchPhrase}
            </li>
            <li>
              <span>bs</span>
              {user.company.bs}
            </li>
            <li>
              <span>Website</span>
              {user.website}
            </li>
          </ul>
        </div>

        <Divider orientation="vertical" borderColor={"#e8e8e8"} />

        <div className=" w-96 pl-8">
          <ul className="alignTitle title">
            Address
            <div className="pl-8">
              <li>
                <span>Street</span>
                {user.address.street}
              </li>
              <li>
                <span>Suite</span>
                {user.address.suite}
              </li>
              <li>
                <span>City</span>
                {user.address.city}
              </li>
              <li>
                <span>Zipcode</span>
                {user.address.zipcode}
              </li>
            </div>
          </ul>
        </div>

        {/* <div className="text-[#a4a4a4] text-xl font-semibold">
          Address
          <div className="text-[#a4a4a4] text-xl font-semibold">
            Street :{" "}
            <span className="text-[#545454] text-xl font-bold ">
              {user.address.street}
            </span>
          </div>
          <div className="text-[#a4a4a4] text-xl font-semibold">
            Suite :{" "}
            <span className="text-[#545454] text-xl font-bold ">
              {user.address.suite}
            </span>
          </div>
          <div className="text-[#a4a4a4] text-xl font-semibold">
            City :{" "}
            <span className="text-[#545454] text-xl font-bold ">
              {user.address.city}
            </span>
          </div>
          <div className="text-[#a4a4a4] text-xl font-semibold">
            Zipcode :{" "}
            <span className="text-[#545454] text-xl font-bold ">
              {user.address.zipcode}
            </span>
          </div>
          <div>
            MAP
            <div>Lat: {user.address.geo.latitude}</div>
            <div>Long: {user.address.geo.longitude}</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
