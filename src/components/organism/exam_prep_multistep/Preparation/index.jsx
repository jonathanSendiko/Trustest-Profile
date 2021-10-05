import { List, ListItem, ListItemText, ListItemAvatar } from "@mui/material";

import {
  Wifi as WifiIcon,
  WbIncandescent as LampIcon,
  NotificationsOff as MuteIcon,
} from "@mui/icons-material";

const Preparation = () => {
  return (
    <List sx={{ width: "100%" }}>
      <ListItem>
        <ListItemAvatar>
          <WifiIcon color="black" fontSize="large" />
        </ListItemAvatar>
        <ListItemText
          primary="Stable Internet Connection"
          secondary="Please ensure you have a stable internet connection."
        />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <LampIcon color="black" fontSize="large" />
        </ListItemAvatar>
        <ListItemText
          primary="Good Lighting"
          secondary="Please ensure your room has good lighting."
        />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <MuteIcon color="black" fontSize="large" />
        </ListItemAvatar>
        <ListItemText
          primary="Keep Silent and Don’t be Interrupted"
          secondary="Please keep silent and make sure you are not interrupted during the test, as the timer cannot be paused once started."
        />
      </ListItem>
    </List>
  );
};

export default Preparation;
