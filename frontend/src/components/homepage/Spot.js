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

function Media(props) {

  console.log(props);
  const { loading = false, chooseTrack, setPlay } = props;
  const { date_created, id, is_respot, spot_text, spotify_json, user_id } =
    props.spotInfo || null;
  console.log("MEDIA spotify_json", spotify_json)
  const { artist, title, uri, albumUrl, bigImage } = spotify_json ? spotify_json : "";
  // useEffect(() => {
  //     const fetchSpots = () => {
  //       console.log("replace me")
  //       // this is where the axios get goes
  //       axios({
  //         method: "get",
  //         url: "http://localhost:8000/spotify/artist_info",
  //       }).then(() => {
  //         // setSpots here
  //       }).catch((err) => {
  //         console.log(err)
  //       })
  //     }
  //     // do function call here to get spots ^
  //     fetchSpots()
  //   }, [isPosting])

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
              src={`https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png`}
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
        <CardMedia
          component="img"
          height="100%"
          image={spotify_json.bigImage.url}
          onClick={() => {
            // chooseTrack([uri])
            // setPlay((prev) => !prev)
            console.log("HLSKDFSKDFSJDFKSJDF", uri)
            chooseTrack((prev) => ({
              playingTrack: [uri],
              play: true
            }))
          }
          }


        // alt="Nicola Sturgeon on a TED talk stage"
        />
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
      <Media spotInfo={props.spotInfo} chooseTrack={props.chooseTrack} setPlay={props.setPlay} />
    </div>
  );
}
