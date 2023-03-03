import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../../../domain/entities/user";
import Rootstore from "../../../domain/stores/Rootstore";

interface Props {
  rootstore: Rootstore;
}

export const Landing: React.FC<Props> = (props) => {
  const [userNameLists, setUserNameList] = useState(
    props.rootstore.userStore.all
  );

  const userNameList = () => {
    return userNameLists.map((val) => {
      return (
        <>
          <Link
            to={`/profile/` + val.id}
            onClick={() =>
              props.rootstore.userStore.setCurrentActiveUserId(val.id)
            }
          >
            <div className="px-14 py-2 cursor-pointer transition delay-100 ease-linear hover:bg-blue-100 ">
              <img
                src={val.profilepicture}
                height={40}
                width={40}
                className={"inline-block rounded-3xl "}
              />
              <span className="pl-4">{val.name}</span>
            </div>
          </Link>
        </>
      );
    });
  };

  useEffect(() => {
    async function fetchReq() {
      await props.rootstore.userStore.userApi.getAllUser();
      setUserNameList(props.rootstore.userStore.all);
    }
    fetchReq();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="h-[600px] w-[600px] border border-black rounded-3xl">
          <div className=" bg-[#f6f6f6] h-36 w-full  rounded-t-3xl flex items-center justify-center">
            <div className="text-3xl">Select an account</div>
          </div>
          <div className="h-[450px] w-full overflow-y-auto overflow-x-hidden  ">
            <div>{userNameList()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
