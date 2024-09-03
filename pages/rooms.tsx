import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const rooms = () => {
  return (
    <Stack spacing={"32px"}>
      <Box
        sx={{
          backgroundColor: "#2e47ad",
          paddingTop: "32px",
          paddingBottom: "32px",
        }}
      >
        <Container maxWidth={"sm"}>
          <Typography>Home</Typography>
          <Stack spacing={"16px"}>
            <Box sx={{ borderRadius: "16px", backgroundColor: "white" }}>
              <TextField
                variant="standard"
                id="input-with-icon-textfield"
                label="TextField"
                fullWidth
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
            <Box sx={{ borderRadius: "16px", backgroundColor: "white" }}>
              <TextField
                fullWidth
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
            <Box sx={{ borderRadius: "16px", backgroundColor: "white" }}>
              <TextField
                fullWidth
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Stack direction={"row"} justifyContent={"center"} spacing={"32px"}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/seed/picsum/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/seed/picsum/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Stack>
  );
};

export default rooms;
