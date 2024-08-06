import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import MainSection from "@/src/home/components/MainSection";
import Footer from "../layout/components/Footer";

const Home = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://covive.mx/wp-content/uploads/elementor/thumbs/people-gathered-inside-house-sitting-on-sofa-1054974-scaled-1-qph8srorxykw36dvp3o4ow2f7ut0y2n9akdt11y6o0.jpg"
        title="imagen"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Roomies
        </Typography>
        <Typography variant="body2" color="text.secondary">
          rhbdtfnjfyjdrhnjth
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Registrarse</Button>
        <Button size="small">Iniciar Sesion</Button>
      </CardActions>
      <Footer></Footer>
    </Card>
  );
};

export default Home;
