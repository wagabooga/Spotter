import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import Icons from "./Icons";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import "./Spot.css"
const playButtonURL = "https://www.vhv.rs/dpng/d/607-6073194_play-icon-white-png-transparent-png.png"


const useStyles = makeStyles({
  albumCover: {
    display: "block",
    width: "100%",
    height: "auto"
  }
});

function Media(props) {
  console.log(props);
  const { loading = false, chooseTrack, setPlay } = props;
  const { date_created, id, is_respot, spot_text, spotify_json, user_id } =
    props.spotInfo || null;
  const { artist, title, uri, albumUrl } = spotify_json ? spotify_json : "";

  const [isPlayOverlayShown, setIsPlayOverlayShown] = useState(false);
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: "auto", m: 2 }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar
              //***user image
              // alt="Ted talk"
              //***profile image for user
              src={spotify_json.artistImage && spotify_json.artistImage.url}
            />
          )
        }
        //**3 dot icon upper right
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            `${title}`
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            `@${artist}`
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 120 }} animation="wave" variant="rectangular" />
      ) : (
        <div
          onMouseEnter={() => setIsPlayOverlayShown(true)}
          onMouseLeave={() => setIsPlayOverlayShown(false)}
          className="spot-image-container"
          onClick={() => {
            chooseTrack((prev) => ({
              playingTrack: [uri],
              play: true,
            }));
          }}>

          {isPlayOverlayShown &&
            <div className="overlay">
              <img
                style={{ height: "100%", width: "100%" }}
                src={playButtonURL}
                className="play-button-icon" />
            </div>}
          <CardMedia
            component="img"
            height="100%"
            image={spotify_json.bigImage.url}

            className={classes.albumCover}
          // onHover={this.image = playButtonURL }
          // onMouseLeave={()=> setIsShown(false)}
          // alt="Nicola Sturgeon on a TED talk stage"
          />
        </div>
      )}
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" component="p">
            {spot_text}
          </Typography>
        )}
      </CardContent>
      <Icons />
    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Spot(props) {
  return (
    <div>
      <Media
        spotInfo={props.spotInfo}
        chooseTrack={props.chooseTrack}
        setPlay={props.setPlay}
      />
    </div>
  );
}
