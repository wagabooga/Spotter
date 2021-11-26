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
  
  const { loading = false, chooseTrack } = props;
    const { 
    date_created, 
    id, 
    is_respot, 
    spot_text,
    spotify_json, 
    user_id 
  } = props.spotInfo || null;

  const { 
    artist,
    title,
    uri,
    albumUrl
  } = spotify_json ? spotify_json:"";
  
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
            `My_Username (user_id) ${user_id}`
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            `@(user_id) ${user_id}`
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
          onClick={() => {chooseTrack([uri])}}
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
          <Typography variant="body2" color="text.secondary" component="p">
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
      <Media spotInfo={props.spotInfo} chooseTrack={props.chooseTrack}/>
    </div>
  );
}
