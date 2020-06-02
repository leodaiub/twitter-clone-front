import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import moment from "moment";
import {
  IconButton,
  ButtonGroup,
  Button,
  Divider,
  TextField,
} from "@material-ui/core";
import LikeIcon from "@material-ui/icons/ThumbUp";
// import ShareIcon from "@material-ui/icons/Share";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  inline: {
    display: "inline",
  },
  list: {
    width: "100%",
  },
  form: {
    width: "100%",
    "& > button": {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function Tweet({
  data,
  postComment,
  comments,
  likes,
  // shares,
  likePost,
  user,
  unlikePost,
}) {
  const [showComments, toggleShowComments] = useState(false);
  const [commentsLength, addCommentsLength] = useState(5);
  const classes = useStyles();

  const didThisUserLikeThePost = () => {
    const userLike = likes.filter((like) => like.user_id === user.id);

    return userLike;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            src={data.user.profile_img}
          ></Avatar>
        }
        title={data.user.username}
        subheader={moment(data.created_at).format("MMMM Do YYYY, h:mm:ss a")}
      />
      <CardContent>
        <Typography>{data.content}</Typography>
      </CardContent>
      <Divider />
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: 30,
          alignItems: "center",
        }}
      >
        <Typography variant="caption"> {likes.length} likes</Typography>
        <Typography
          variant="caption"
          onClick={() => toggleShowComments(!showComments)}
        >
          {" "}
          {comments.length} comments
        </Typography>
        {/* <Typography variant="caption"> {shares.length} shares</Typography> */}
      </CardActions>
      <Divider />
      <CardActions disableSpacing>
        <ButtonGroup
          size="small"
          fullWidth
          variant="text"
          color="primary"
          aria-label="text primary button group"
          style={{ margin: 0 }}
        >
          <Button
            size="small"
            onClick={
              didThisUserLikeThePost().length === 0
                ? () => likePost(data.id)
                : () => unlikePost(didThisUserLikeThePost()[0].id)
            }
            color={
              didThisUserLikeThePost().length === 0 ? "primary" : "secondary"
            }
          >
            <IconButton size="small" aria-label="delete">
              <LikeIcon />
            </IconButton>{" "}
            {didThisUserLikeThePost().length === 0 ? "LIKE" : "UNLIKE"}
          </Button>
          <Button
            size="small"
            onClick={() => toggleShowComments(!showComments)}
          >
            <IconButton size="small" aria-label="delete">
              <ChatBubbleIcon />
            </IconButton>{" "}
            Comment
          </Button>
          {/* <Button size="small" onClick={() => sharePost(data.content, data.id)}>
            <IconButton size="small" aria-label="delete">
              <ShareIcon />
            </IconButton>{" "}
            Share
          </Button> */}
        </ButtonGroup>
      </CardActions>
      {showComments && (
        <CardActions>
          <List className={classes.list}>
            {comments.slice(0, commentsLength).map((comment) => (
              <div>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={comment.user.profile_img} />
                  </ListItemAvatar>
                  <ListItemText
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {comment.user.username}
                        </Typography>{" "}
                        {comment.content}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            ))}
            {comments.length > 5 && comments.length > commentsLength && (
              <ListItem>
                <Button onClick={() => addCommentsLength(commentsLength + 5)}>
                  Load more...
                </Button>
              </ListItem>
            )}

            <ListItem>
              <form
                className={classes.form}
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();

                  postComment(e.target.content.value, data.id);
                  e.target.content.value = "";
                }}
              >
                <TextField
                  rows={3}
                  multiline
                  name="content"
                  id="content"
                  variant="outlined"
                  required
                  fullWidth
                  autoFocus
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Comment
                </Button>
              </form>
            </ListItem>
          </List>
        </CardActions>
      )}
    </Card>
  );
}
