import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
const UserHeader = () => {
  const toast = useToast();

  const copyURL = () => {
    const currentURL = window.location.href;
    // console.log(currentURL);
    navigator.clipboard.writeText(currentURL);
    toast({
      title: "Link copied",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };
  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Aman Srivastava
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>Amansrivastava</Text>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={1}
              borderRadius={"full"}
            >
              SocialNest.com
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar name="Aman Srivastava" src="/aman.jpeg" size={"xl"} />
        </Box>
      </Flex>
      <Text fontSize={"md"}>
        I am a full-stack developer. I love to write about technology and
        programming.
      </Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>3.2k Followers</Text>
          <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
          <Link color={"gray.light"}>SocialNest.com</Link>
        </Flex>
        <Flex>
          <Box className="icon-container">
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"}>
                  <MenuItem bg={"gray.dark"} onClick={copyURL}>
                    Copy link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>
      <Flex w={"full"}>
        <Flex
          flex={1}
          borderBottom={"1.5px solid white"}
          justifyContent={"center"}
          pb="3"
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}> Threads</Text>
        </Flex>
        <Flex
          flex={1}
          borderBottom={"1px solid gray"}
          justifyContent={"center"}
          color={"gray.light"}
          pb="3"
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}> Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
