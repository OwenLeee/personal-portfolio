import React from "react";
import {
  Box,
  Collapse,
  Fade,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import ScrollIntoView from "react-scroll-into-view";
import content from "../../../data";
import useScrollDirection from "../../../customHook/useScrollDirection";

const NavBar: React.FC = () => {
  const { navbar } = content;
  const { isOpen, onToggle } = useDisclosure();
  const scrollDirection = useScrollDirection();

  return (
    <Fade in={scrollDirection === "up"}>
      <Flex
        position="fixed"
        justify={["end", "center"]}
        align={"center"}
        top={0}
        left={0}
        right={0}
        py={4}
        px={6}
        bgColor="gray.800"
        overflow="auto"
        zIndex={999}
        fontSize={["md", "lg"]}
        color={useColorModeValue("gray.800", "primary")}
      >
        <Flex
          position="fixed"
          left={5}
          fontSize={["lg", "3xl"]}
          display={isOpen ? "none" : "block"}
        >
          <ScrollIntoView selector={"#Landing"}>
            <Text fontFamily="Comforter" cursor="pointer">
              {navbar.logo}
            </Text>
          </ScrollIntoView>
        </Flex>

        {/* Desktop Menu */}
        <Flex
          justify="center"
          align="center"
          display={{ base: "none", md: "flex" }}
        >
          {navbar?.menus &&
            navbar.menus.map((menu, index) => (
              <Box mx={[1, 4]} key={index + "menu"}>
                <ScrollIntoView selector={"#" + menu}>
                  <MenuItem>{menu}</MenuItem>
                </ScrollIntoView>
              </Box>
            ))}
        </Flex>

        {/* Mobile Menu */}
        {/* Collapsible Mobile Menu */}
        <Box w="100%" display={["block", "none"]}>
          <Collapse in={isOpen} animateOpacity>
            {navbar?.menus &&
              navbar.menus.map((menu, index) => (
                <Box mx={[1, 4]} key={index + "menu"} bg="gray.700">
                  <ScrollIntoView selector={"#" + menu}>
                    <MenuItem _onClick={onToggle}>{menu}</MenuItem>
                  </ScrollIntoView>
                </Box>
              ))}
          </Collapse>
        </Box>
        <IconButton
          display={{ base: "block", md: "none" }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          onClick={onToggle}
          aria-label="Toggle navigation"
        />
      </Flex>
    </Fade>
  );
};

interface MenuItemProps {
  _onClick?: () => void;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({
  _onClick = () => {},
  children,
}) => {
  return (
    <Box
      px={2}
      py={1}
      color="primary"
      fontWeight="medium"
      borderRadius="md"
      textTransform="uppercase"
      _hover={{ bg: "gray.50" }}
      onClick={() => setTimeout(_onClick, 1000)}
    >
      {children}
    </Box>
  );
};

export default NavBar;
