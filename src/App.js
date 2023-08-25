import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import { lightBlue, yellow } from "@mui/material/colors";

function CountdownApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 50);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Count cannot be negative!");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: yellow[100],
      }}
    >
      <Card
        sx={{
          minWidth: 275,
          padding: 5,
          height: 300,
          background: lightBlue[100],
        }}
      >
        <CardContent sx={{ mt: 5 }}>
          <Typography variant="h4" gutterBottom>
            Countdown App
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ textAlign: "center", mt: 4 }}
          >
            Counter: {count}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <Tooltip title="add">
              <Button
                variant="contained"
                color="primary"
                onClick={handleIncrement}
                sx={{ padding: 2, ml: 2 }}
              >
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleDecrement}
                sx={{ padding: 2, ml: 2 }}
              >
                <DeleteIcon />
              </Button>
            </Tooltip>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CountdownApp;
