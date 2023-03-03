import React, { useState } from "react";
import Rootstore from "../../../domain/stores/Rootstore";

interface Props {
  rootstore: Rootstore;
}

const Post: React.FC<Props> = (props) => {
  const [user, setUser] = useState(
    props.rootstore.userStore.getCurrentActiveUser()[0]
  );
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between w-full h-min  px-10">
        <div className="text-[#545454] text-xl font-bold ">Posts</div>

        <div>
          <img
            src={user.profilepicture}
            height={30}
            width={30}
            className={"rounded-full inline-block"}
          />
          <span className="text-[#545454] font-semibold pl-4">{user.name}</span>
        </div>
      </div>

      <div className="text-6xl text-[#eeeeee] font-bold m-auto w-full h-full text-center grid place-items-center">
        Coming Soon
      </div>
    </div>
  );
};

export default Post;
