import {
  Flex,
  AppShell,
  Burger,
  // Button,
  // useMantineColorScheme,
  // useComputedColorScheme,
} from "@mantine/core";

// creating a header component for the website

// dark mode
// import { FaSun, FaMoon } from "react-icons/fa";
// import { useDisclosure } from "@mantine/hooks";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

function Header({ opened, toggle }: HeaderProps) {
  // const [opened, { toggle }] = useDisclosure();
  // const { setColorScheme } = useMantineColorScheme();
  // const computedColorScheme = useComputedColorScheme("light");

  // const toggleColorScheme = () => {
  //   setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  // };

  return (
    <AppShell.Header>
      <Flex
        justify="space-between"
        align="center"
        style={{ padding: "0", paddingLeft: "0" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Burger opened={opened} onClick={toggle} size="sm" />
          <img
            src="/public/H.png"
            alt="Hirona Logo"
            style={{ height: "40px", marginLeft: "10px" }}
          />
        </div>
        <div style={{ marginLeft: "10px" }}>Hirona 0.1</div>

        {/* <Button size="sm" variant="link" onClick={toggleColorScheme}>
        {computedColorScheme === "dark" ? <FaSun /> : <FaMoon />}
      </Button> */}
      </Flex>
    </AppShell.Header>
  );
}

export default Header;
