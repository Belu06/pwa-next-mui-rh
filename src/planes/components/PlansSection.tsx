import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const PlansSection = () => {
  const plans: {
    title: string;
    description: string;
    price: number;
    hrefViewMore: string;
    hrefSelectPlan: string;
  }[] = [
    {
      title: "Website",
      description: "Crea un catálogo profesional y atractivo que sorprenda.",
      price: 2990,
      hrefViewMore: "#",
      hrefSelectPlan: "#",
    },
    {
      title: "Business",
      description:
        "Comienza a vender al instante con los elementos esenciales del eCommerce.",
      price: 5990,
      hrefViewMore: "#",
      hrefSelectPlan: "#",
    },
    {
      title: "Advanced Store",
      description:
        "Haz crecer tu negocio con potentes herramientas de marketing.",
      price: 8990,
      hrefViewMore: "#",
      hrefSelectPlan: "#",
    },
  ];

  return (
    <>
      <Typography textAlign={"center"} variant="h4" className="title">
        Elije el plan que mejor te convenga
      </Typography>
      <br />
      <Grid container spacing={4}>
        {plans.map((item, index) => (
          <Grid item key={index} xs={12} md={4}>
            <Card elevation={4}>
              <Stack
                height={"420px"}
                padding={".5rem"}
                justifyContent={"space-between"}
              >
                <CardHeader title={item.title} subheader={item.description} />
                <Box>
                  <CardContent>
                    <Typography variant="caption">Desde</Typography>
                    <Typography variant="h4" className="title">
                      {`AR$ ${item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00`}
                    </Typography>
                    <Typography variant="caption">/mes</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      className="button contained"
                      href={item.hrefSelectPlan}
                    >
                      Seleccionar
                    </Button>
                    <Button
                      variant="text"
                      className="button button-text"
                      href={item.hrefViewMore}
                    >
                      Ver más
                    </Button>
                  </CardActions>
                </Box>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PlansSection;
