import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

export default function DrawerComp() {
  const pages = ["HOME", "ABOUT US", "MINISTRIES", "CONTACT US", "EVENTS"];
  const [openDrawer, setopenDrawer] = useState(false);
  const buttonClick = () => setopenDrawer(!openDrawer);

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index} onClick={() => setopenDrawer()}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: "auto" }} onClick={buttonClick}>
        <MenuIcon></MenuIcon>
      </IconButton>
    </React.Fragment>
  );
}
