import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Landing from "./presentation/pages/landing_page/landing";
import Rootstore from "./domain/stores/Rootstore";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Profile from "./presentation/pages/profile/profile";
import {
  Flex,
  useColorModeValue,
  IconButton,
  useBreakpointValue,
  Stack,
  Button,
  Avatar,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Divider,
} from "@chakra-ui/react";
import Post from "./presentation/pages/post/post";
import Gallery from "./presentation/pages/gallery/gallery";
import Todo from "./presentation/pages/todo/todo";

interface Props {
  rootstore: Rootstore;
}

// const App: React.FC<Props> = (props) => {
//   return <div className="">{<Landing rootstore={props.rootstore} />}</div>;
// };

const App: React.FC<Props> = (props) => {
  const Links = ["Dashboard", "Projects", "Team"];

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Landing rootstore={props.rootstore} />}
        ></Route>
      </Routes>
      {props.rootstore.userStore.isLogin && (
        <div className="flex flex-row h-screen w-full px-24 pt-12 ">
          <nav className="bg-[#4055c8] h-full w-[350px] rounded-3xl text-[#a6a5e4] text-xl flex  items-center ">
            <ul className="px-8 -4 w-full">
              <li className="py-4 hover:text-white">
                <Link
                  to={
                    "/profile/" +
                    props.rootstore.userStore.getCurrentActiveUserId()
                  }
                >
                  Profile
                </Link>
              </li>
              <Divider orientation="horizontal" />
              <li className="py-4 hover:text-white">
                <Link
                  to={
                    "/posts/" +
                    props.rootstore.userStore.getCurrentActiveUserId()
                  }
                >
                  Posts{" "}
                </Link>
              </li>
              <Divider orientation="horizontal" />

              <li className="py-4 hover:text-white">
                <Link
                  to={
                    "/gallery/" +
                    props.rootstore.userStore.getCurrentActiveUserId()
                  }
                >
                  Gallery{" "}
                </Link>
              </li>
              <Divider orientation="horizontal" />

              <li className="py-4 hover:text-white">
                <Link
                  to={
                    "/todo/" +
                    props.rootstore.userStore.getCurrentActiveUserId()
                  }
                >
                  ToDo{" "}
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/profile/:id"
              element={<Profile rootstore={props.rootstore} />}
            ></Route>
            <Route
              path="/posts/:id"
              element={<Post rootstore={props.rootstore} />}
            ></Route>
            <Route
              path="/gallery/:id"
              element={<Gallery rootstore={props.rootstore} />}
            ></Route>
            <Route
              path="/todo/:id"
              element={<Todo rootstore={props.rootstore} />}
            ></Route>
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
