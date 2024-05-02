import React, { useState } from "react";
import Actions from "./Actions";
import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";

const Comment = ({ reply, lastReply }) => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src={"/aman.jpeg"} size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize="sm" fontWeight="bold">
              Aman Srivastava
            </Text>
          </Flex>
          <Text>Hey this looks great</Text>
          <Actions liked={liked} setLiked={setLiked} />
          <Text color={"gray.light"} fontSize={"sm"}>
            {100 + (liked ? 1 : 0)} Likes
          </Text>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default Comment;
