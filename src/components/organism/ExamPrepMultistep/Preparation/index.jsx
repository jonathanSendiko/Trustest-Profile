import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";

import {
  Wifi as WifiIcon,
  WbIncandescent as LampIcon,
  NotificationsOff as MuteIcon,
} from "@mui/icons-material";

const Preparation = ({ quiz }) => {
  return (
    <div>
      <div className="examprep__steps__header">
        <h1>Exam Preparation</h1>
        <p>{quiz.subjectName}</p>
        <p>{quiz.quizName}</p>
      </div>
      <Divider variant="middle" flexItem />
      <div className="examprep__steps__content">
        <List>
          <ListItem>
            <ListItemIcon>
              <WifiIcon color="black" fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary="Stable Internet Connection"
              secondary="Please ensure you have a stable internet connection."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <LampIcon color="black" fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary="Good Lighting"
              secondary="Please ensure your room has good lighting."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <MuteIcon color="black" fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary="Keep Silent and Don’t be Interrupted"
              secondary="Please keep silent and make sure you are not interrupted during the test, as the timer cannot be paused once started."
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Preparation;
