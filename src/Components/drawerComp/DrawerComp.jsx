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

export default function DrawerComp() {
  const pages = ["HOME", "ABOUT US", "MINISTRIES", "CONTACT US", "EVENTS"];
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              {pages.map((page, index) => (
                <ListItemText key={index}>{page}</ListItemText>
              ))}
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onCLick={() => setopenDrawer(!openDrawer)}>
        <MenuIcon></MenuIcon>
      </IconButton>
    </React.Fragment>
  );
}
