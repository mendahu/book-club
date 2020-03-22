import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import StarBorder from "@material-ui/icons/StarBorder";
import {
  Avatar,
  Chip,
  Paper,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Button
} from "@material-ui/core";

import Link from "next/link";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    marginTop: "1vh",
    height: "25vh"
  },
  imageContainer: {
    display: "flex",
    width: "17%",
    padding: 0
  },
  thumb_image: {
    margin: "auto",
    maxHeight: "13vh",
    maxWidth: "10vh"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    padding: "0",
    justifyContent: "space-between"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "78%"
  },
  title: {
    width: "90%",
    fontSize: "2vh"
  },
  author: {
    width: "90%",
    fontSize: "1.5vh"
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "0",
    flexWrap: "wrap"
  },
  year: {
    width: "10%",
    alignSelf: "flex-end"
  },
  button: {
    height: "3vh"
  },
  chip: {
    margin: ".3vh",
    height: "2vh",
    fontSize: "1vh"
  },
  chip_button: {
    margin: 0,
    padding: 0
  },
  chip_avatar: {
    maxHeight: "1.7vh",
    maxWidth: "1.7vh",
    fontSize: "1vh"
  },
  rating: {
    width: "10%",
    fontSize: "2vh",
    margin: "auto"
  },
  star: {
    margin: "auto"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

export default function BookBanner(props) {
  console.log(props);
  const classes = useStyles();
  const theme = useTheme();

  return (
    <form>
      <Paper>
        <Card className={classes.root}>
          <CardContent className={classes.imageContainer}>
            <CardMedia className={classes.thumb_image}>
              <img className={classes.thumb_image} src={props.book.image_url} />
            </CardMedia>
          </CardContent>
          <CardContent className={classes.content}>
            <CardContent className={classes.row}>
              <Typography className={classes.title} component='h5' variant='h5'>
                {props.book.title}
              </Typography>
              {props.book.avg_rating && <StarBorder className={classes.star} />}
              <Typography
                className={classes.rating}
                variant='subtitle1'
                color='textSecondary'>
                {props.book.avg_rating}
              </Typography>
            </CardContent>
            <div className={classes.tags}>
              {props.book.tags &&
                JSON.parse(props.book.tags).map((tag, index) => (
                  <Chip
                    className={classes.chip}
                    key={index}
                    label={tag.tag_name}
                    avatar={
                      <Avatar className={classes.chip_avatar}>
                        {tag.count}
                      </Avatar>
                    }
                  />
                ))}
            </div>
            <CardContent className={classes.row}>
              {props.book.authors &&
                JSON.parse(props.book.authors).map((author, index) => (
                  <Typography className={classes.author} variant='subtitle1'>
                    {author}
                  </Typography>
                ))}
              <Typography
                className={classes.year}
                variant='subtitle1'
                color='textSecondary'>
                {props.book.year}
              </Typography>
            </CardContent>
            <CardContent className={classes.row}>
              <Typography variant='subtitle1' color='textSecondary'>
                Started On: Jan 5, 2020
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                Ends on: April 4: 2020
              </Typography>
            </CardContent>
            <CardContent className={classes.buttons}>
              <Link href={`/books/${props.book.id}`}>
                <Button
                  className={classes.button}
                  variant='contained'
                  color='primary'>
                  <Typography variant='body2'>Go To Book</Typography>
                </Button>
              </Link>
              <Button
                className={classes.button}
                variant='contained'
                color='primary'>
                <Typography variant='body2'>JOIN</Typography>
              </Button>
            </CardContent>
          </CardContent>
        </Card>
      </Paper>
    </form>
  );
}