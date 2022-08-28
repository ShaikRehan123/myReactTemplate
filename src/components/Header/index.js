import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
  useColorMode,
  MenuCommand,
} from "@chakra-ui/react";
import { AiOutlineBars, AiOutlineClose, AiOutlineLogout } from "react-icons/ai";

import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Links = [
  { name: "Home", slug: "/" },
  { name: "About", slug: "about" },
  { name: "Protected", slug: "protected" },
];

const NavLink = ({ children, isActive, url }) => (
  <Link
    px={2}
    py={2}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("brand.primary", "brand.secondary"),
    }}
    backgroundColor={isActive ? "brand.secondary" : "transparent"}
    href={url}
  >
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={
              isOpen ? (
                <Icon as={AiOutlineClose} />
              ) : (
                <Icon as={AiOutlineBars} />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box fontWeight={800} color="brand.secondary">
              Brand Name
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => {
                let isActive;
                if (link.slug === "/" && location.pathname === "/") {
                  isActive = true;
                } else if (`/${link.slug}` === location.pathname) {
                  isActive = true;
                } else {
                  isActive = false;
                }

                return (
                  <NavLink key={link.slug} isActive={isActive} url={link.slug}>
                    {link.name}
                  </NavLink>
                );
              })}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode} marginRight={5}>
              {colorMode === "light" ? (
                <Icon as={FaRegMoon} />
              ) : (
                <Icon as={FaRegSun} />
              )}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Privacy</MenuItem>
                <MenuDivider />
                <MenuItem
                  command={
                    <MenuCommand className="">
                      <Icon
                        as={AiOutlineLogout}
                        color="brand.quaternary"
                        fontSize={30}
                      />
                    </MenuCommand>
                  }
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => {
                let isActive;
                if (link.slug === "/" && location.pathname === "/") {
                  isActive = true;
                } else if (`/${link.slug}` === location.pathname) {
                  isActive = true;
                } else {
                  isActive = false;
                }

                return (
                  <NavLink key={link.slug} isActive={isActive} url={link.slug}>
                    {link.name}
                  </NavLink>
                );
              })}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
