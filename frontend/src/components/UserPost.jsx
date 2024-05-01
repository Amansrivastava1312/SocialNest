import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";
const UserPost = ({ likes, replies, postImg, postTitle }) => {
  return (
    <Link>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar size={"md"} name="AmanSrivastava" src="/aman.jpeg" />
          <Box w="1px" h={"full"} bg={"gray.light"} my={2}></Box>
          <Box position={"relative"} w={"full"}>
            <Avatar
              size="xs"
              name="John doe"
              src="https://bit.ly/dan-abramov"
              position={"absolute"}
              top={"0px"}
              left="15px"
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="John doe"
              src="https://bit.ly/sage-adebayo"
              position={"absolute"}
              bottom={"0px"}
              right="-5px"
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="John doe"
              src="https://bit.ly/prosper-baba"
              position={"absolute"}
              bottom={"0px"}
              left="4px"
              padding={"2px"}
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"}>
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                Aman Srivastava
              </Text>
              <Image src="/verified.png" w={4} h={4} ml={1} />
            </Flex>
            <Flex alignItems={"center"} gap>
              <Text fontSize={"xs"} color={"gray.light"}>
                1d
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text fontSize={"sm"}> {postTitle}</Text>
          <Box
            borderRadius={6}
            overflow={"hidden"}
            border={"1px solid"}
            borderColor={"gray.light"}
          >
            <Image src={postImg}></Image>
          </Box>
          <Flex gap={3} my={3}>
            <Actions />
          </Flex>
          <Flex gap={2} alignItems={"center"}>
            <Text color={"gray.light"} fontSize="sm">
              {replies} replies
            </Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
            <Text color={"gray.light"} fontSize="sm">
              {likes} likes
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPost;
