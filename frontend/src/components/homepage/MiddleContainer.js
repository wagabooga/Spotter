import React from "react";
import { makeStyles } from "@mui/styles";
import SpotList from "./SpotList";
import SpotPostContainer from "./SpotPostContainer/SpotPostContainer.js";
const useStyles = makeStyles({
  text: {
    color: "#1DB954",
  },
});

const spots = [
  {
    avatarUrl: "https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
  },
  {
    avatarUrl: "https://lh3.googleusercontent.com/proxy/Bzshkxly2_z9L1pyJk6RejoHSR7FIamooBTPeVOMKSfZ-IaF3Nbyhk6KcTju4IWvYEUvQF_6M7SI1zcRb7hMlBKcWw1bo5mU2g"
  },
  {
    avatarUrl: "https://www.mcdonalds.com/content/dam/ca/nfl/web/nutrition/products/tile/en/mcdonalds-fries-small.jpg"
  },
  {
    avatarUrl: "https://icons-for-free.com/iconfiles/png/512/instagram+original+icon-1320194901224047116.png"
  },
]





// const [isPost, setisPosting] = useState("")

// useEffect(() => {
//   const fetchSpots = () => {
//     console.log("replace me")
//     // this is where the axios get goes
//     axios({
//       method: "get",
//       url: "http://localhost:8000/login/redirect",
//     }).then(() => {
//       // setSpots here
//     }).catch((err) => {
//       console.log(err)
//     })
//   }
//   // do function call here to get spots ^
//   fetchSpots()
// }, [isPosting])


export default function MiddleContainer() {
  const classes = useStyles();

  return (
    <div className={classes.text}>
      <h2>Home</h2>
      <div>
        <SpotPostContainer />
      </div>
      <SpotList spots={spots} />
    </div>
  );
}
