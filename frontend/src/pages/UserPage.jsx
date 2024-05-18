import React, { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import useGetUserProfile from "../hooks/useGetUserProfile";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";

const UserPage = () => {
  const { user, loading } = useGetUserProfile();

  // const { username } = useParams();
  const showToast = useShowToast();

  if (!user && loading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner size={"xl"} />
      </Flex>
    );
  }

  if (!user && !loading) return <h1>User not found</h1>;
  // console.log(user);

  return (
    <>
      <UserHeader user={user} />
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
