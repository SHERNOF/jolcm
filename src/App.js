import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./Pages/Home/Home";
import React, { useEffect, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  logo: {
    fill: "#fff",
    stroke: "rgba(0, 0, 0, 0.17)",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  logo: {
    fill: "rgba(0, 0, 0, 0.17)",
    stroke: "#fff",
  },
});

function App() {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   // fetch("../public/data.json")
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((resJson) => {
  //       const data = JSON.parse(resJson);
  //       setItems(data);
  //     });
  // }, []);
  // let a = JSON.stringify(items);
  // console.log(a);

  const data = [
    {
      userId: 1,
      id: 1,
      name: "Melchor Abrasaldo",
      position: "Head Pastor",
      verseName: "Philippians 2: 5-11",
      verse:
        "In your relationships with one another, have the same mindset as Christ Jesus: Who, being in very nature God, did not consider equality with God something to be used to his own advantage; rather, he made himself nothing by taking the very nature of a servant, being made in human likeness. And being found in appearance as a man, he humbled himself by becoming obedient to death— even death on a cross! Therefore God exalted him to the highest place and gave him the name that is above every name, that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue acknowledge that Jesus Christ is Lord, to the glory of God the Father.",
      pic: "../img/Carol.png",
    },
    {
      userId: 1,
      id: 2,
      name: "Sister Carol",
      position: "Pastor",
      verseName: "Isaiah 40:31",
      verse:
        "The grass withers and the flowers fall, but the word of our God endures forever.",
      pic: "../img/Pastor Bong.jpg",
    },
    {
      userId: 1,
      id: 3,
      name: "Bro. Nomer",
      position: "Pastor",
      verseName: "1 Peter 4:8",
      verse:
        "Be alert and of sober mind. Your enemy the devil prowls around like a roaring lion looking for someone to devour. Resist him, standing firm in the faith, because you know that the family of believers throughout the world is undergoing the same kind of sufferings.",
      pic: "../img/Pastor Bong.jpg",
    },
    {
      userId: 1,
      id: 4,
      name: "Sis. Ida",
      position: "Worship Leader",
      verseName: "John 3:16",
      verse:
        "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      pic: "../img/Pastor Bong.jpg",
    },
    {
      userId: 1,
      id: 5,
      name: "Bro. Ferdie",
      position: "Pastor",
      verseName: "John 3:16",
      verse:
        "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      pic: "../img/Pastor Bong.jpg",
    },
    {
      userId: 1,
      id: 6,
      name: "Bro. Neil",
      position: "Activities / Multimedia",
      verseName: "Romans 6:23",
      verse:
        "For the wages of sin is death, but the free gift of God is eternal life through Christ Jesus our Lord",
      pic: "../img/Pastor Bong.jpg",
    },
  ];

  const now = new Date().getHours();
  const theme = useTheme();
  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [wheel, setWheel] = useState(false);
  const eventHandler = (e) => {
    const ev = e.deltaY;
    ev < 0 ? setWheel(true) : setWheel(false);
  };
  return (
    <ThemeProvider theme={now >= 18 ? darkTheme : lightTheme}>
      <div className="App" onWheel={eventHandler}>
        <Home isMed={isMed} data={data} isSmall={isSmall} wheel={wheel}></Home>
      </div>
    </ThemeProvider>
  );
}

export default App;
