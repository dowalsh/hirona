import { AppShell, NavLink } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconHome2, IconPlus } from "@tabler/icons-react";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppShell.Navbar p="md" style={{ gap: "10px" }}>
      <NavLink
        label="Home"
        onClick={() => navigate("/")}
        style={{ margin: "5px" }}
        leftSection={<IconHome2 size={16} stroke={1.5} />}
      />
      <NavLink
        label="Create"
        onClick={() => navigate("/create")}
        style={{ margin: "5px" }}
        leftSection={<IconPlus size={16} stroke={1.5} />}
      />
    </AppShell.Navbar>
  );
};

export default Navbar;
