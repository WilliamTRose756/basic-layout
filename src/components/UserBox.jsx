import { Box, Typography, List, ListItem, ListItemButton } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function UserBox() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderBottom: "solid black 1px",
        }}
      >
        <AccountBoxIcon
          id="person-icon"
          fontSize="large"
          sx={{ height: "80px", width: "80px" }}
        />
        <Typography variant="h6"> John Doe </Typography>
      </Box>
      <Box>
        <List>
          <ListItemButton>
            <ListItem variant="h3">Dashboard</ListItem>
          </ListItemButton>
          <ListItemButton>
            <ListItem>Profile</ListItem>
          </ListItemButton>
          <ListItemButton>
            <ListItem>People</ListItem>
          </ListItemButton>
          <ListItemButton>
            <ListItem>PLMS Catalog</ListItem>
          </ListItemButton>
          <ListItemButton>
            <ListItem>Settings</ListItem>
          </ListItemButton>
          <ListItemButton>
            <ListItem>Logout</ListItem>
          </ListItemButton>
        </List>
      </Box>
    </>
  );
}

export default UserBox;
