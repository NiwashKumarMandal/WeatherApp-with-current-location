import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';

export default function InfoBox({ info }) {
  const Rainy_Url =
    "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW58ZW58MHx8MHx8fDA%3D";
  const Sunnu_Url =
    "https://media.istockphoto.com/id/815712236/photo/golden-wheat-field-under-beautiful-sunset-sky.webp?b=1&s=170667a&w=0&k=20&c=-v9QGPxV_9thTeC4wGVNSSS94OB5wsNWg9rC3xixyws=";
  const Winter_Url =
    "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyfGVufDB8fDB8fHww";

  return (
    <div style={{ textAlign: "center" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80
              ? Rainy_Url
              : info.temp > 15
              ? Sunnu_Url
              : Winter_Url
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {
            info.humidity > 80
              ? <ThunderstormRoundedIcon/>
              : info.temp > 15
              ? <WbSunnyRoundedIcon/>
              : <AcUnitIcon/>
          }
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature={info.temp}&deg;C</p>
            <p>humidity={info.humidity}%</p>
            <p>Min Temp={info.tempMin}&deg;C</p>
            <p>Max Temp={info.tempMax}&deg;C</p>
            <p>
              The weather can be described as <i>{info.weather}</i> and feels
              like={info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
