import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Clock, Money, Storefront } from 'phosphor-react';
import Stars from '../../atoms/stars';

const RecipeCard = ({ recipe }) => {
  return (
    <Card sx={{ width: "200px", margin: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={recipe?.image}
          alt={recipe?.title}
        />
        <CardContent sx={{padding: "12px 12px 5px",  }}>
          <Typography gutterBottom variant="h5" component="div" sx={{
            display: "-webkit-box",
            boxOrient: "vertical",
            lineClamp: 2,
            wordBreak: "break-all",
            overflow: "hidden",
            fontSize: "15px",
            fontWeight: "200px"
          }}>
            {recipe?.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Clock size={18} /> <span>{recipe?.time}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Money size={18} /> <span>{recipe?.price} €</span>
              </div>
            </div>

            {/* Segunda línea: dificultad */}
            <div style={{ marginTop: 8 }}>
              <Stars value={recipe?.difficult || 0} />
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "flex-end" }}>
        <Button size="small" color="primary" onClick={() => { console.log("Receta añadida") }}>
          <Storefront size={18} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;



