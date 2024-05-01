import React from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={234}
        postImg="/post1.png"
        postTitle="This is demo post"
      />
      <UserPost
        likes={1200}
        replies={234}
        postImg="/post1.png"
        postTitle="This is demo post"
      />

      <UserPost
        likes={1200}
        replies={234}
        postImg="/post1.png"
        postTitle="This is demo post"
      />

      <UserPost
        likes={1200}
        replies={234}
        postImg="/post1.png"
        postTitle="This is demo post"
      />
    </>
  );
};

export default UserPage;
