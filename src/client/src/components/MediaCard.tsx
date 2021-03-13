import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import theme from "../theme";

const useStyles = makeStyles({
  root: {
    margin: theme.spacing(2, 0),
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
});

const MediaCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="iframe"
        src="https://www.youtube-nocookie.com/embed/CT-ov6wzy8o"
        height="225"
        width="500"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          asdf
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          fdsa
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
