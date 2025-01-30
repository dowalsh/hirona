import { AppShell, NavLink } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconHome2, IconPlus } from "@tabler/icons-react";

interface NavbarProps {
  opened: boolean;
} // interface NavbarProps

const Navbar: React.FC<NavbarProps> = ({ opened }) => {
  const navigate = useNavigate();

  return (
    <AppShell.Navbar
      p="sm"
      style={{ gap: "0", display: opened ? "block" : "none" }}
    >
      <NavLink
        label="Home"
        onClick={() => navigate("/")}
        style={{ margin: "0px" }}
        leftSection={<IconHome2 size={16} stroke={1.5} />}
      />
      <NavLink
        label="Create"
        onClick={() => navigate("/create")}
        style={{ margin: "0px" }}
        leftSection={<IconPlus size={16} stroke={1.5} />}
      />
    </AppShell.Navbar>
  );
};

export default Navbar;
