import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";

export default function DrawerComp({ styleHeader }) {
  const theme = useTheme();
  const pages = ["HOME", "ABOUT US", "MINISTRIES", "CONTACT US", "EVENTS"];
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{
          marginLeft: "auto",
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon
          sx={{
            color: styleHeader ? "white" : theme.palette.primary.light,
          }}
        />
      </IconButton>
    </React.Fragment>
  );
}
