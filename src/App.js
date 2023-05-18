// // 0. Clone gestures repo DONE
// // 0. Install packages DONE
// // 1. Create new gesture definition DONE
// // 2. Import gesture into handpose DONE


// ///////// NEW STUFF ADDED USE STATE
// import React, { useRef, useState, useEffect } from "react";
// ///////// NEW STUFF ADDED USE STATE

// // import logo from './logo.svg';
// import * as tf from "@tensorflow/tfjs";
// import * as handpose from "@tensorflow-models/handpose";
// import Webcam from "react-webcam";
// import "./App.css";
// import { drawHand } from "./utilities";

// import {loveYouGesture} from "./LoveYou"; 
// import {PaperGesture} from "./Paper"; 

// ///////// NEW STUFF IMPORTS
// import * as fp from "fingerpose";
// import victory from "./victory.png";
// import thumbs_up from "./thumbs_up.png";
// ///////// NEW STUFF IMPORTS

// function App() {






//   const webcamRef = useRef(null);
//   const canvasRef = useRef(null);

//   ///////// NEW STUFF ADDED STATE HOOK
//   const [emoji, setEmoji] = useState(null);
//   const images = { thumbs_up: thumbs_up, victory: victory };
//   ///////// NEW STUFF ADDED STATE HOOK

//   const runHandpose = async () => {
//     const net = await handpose.load();
//     console.log("Handpose model loaded.");
//     //  Loop and detect hands
//     setInterval(() => {
//       detect(net);
//     }, 10);
//   };

//   const detect = async (net) => {
//     // Check data is available
//     if (
//       typeof webcamRef.current !== "undefined" &&
//       webcamRef.current !== null &&
//       webcamRef.current.video.readyState === 4
//     ) {
//       // Get Video Properties
//       const video = webcamRef.current.video;
//       const videoWidth = webcamRef.current.video.videoWidth;
//       const videoHeight = webcamRef.current.video.videoHeight;

//       // Set video width
//       webcamRef.current.video.width = videoWidth;
//       webcamRef.current.video.height = videoHeight;

//       // Set canvas height and width
//       canvasRef.current.width = videoWidth;
//       canvasRef.current.height = videoHeight;

//       // Make Detections
//       const hand = await net.estimateHands(video);
//       // console.log(hand);

//       ///////// NEW STUFF ADDED GESTURE HANDLING

//       if (hand.length > 0) {
//         const GE = new fp.GestureEstimator([
//           fp.Gestures.VictoryGesture,
//           fp.Gestures.ThumbsUpGesture,
//           loveYouGesture,
//           PaperGesture
//         ]);
//         const gesture = await GE.estimate(hand[0].landmarks, 4);
//         if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
//           console.log(gesture.gestures);

//           const confidence = gesture.gestures.map(
//             (prediction) => prediction.confidence
//           );
//           const maxConfidence = confidence.indexOf(
//             Math.max.apply(null, confidence)
//           );
//           console.log(gesture.gestures[maxConfidence].name);
//           const currentTime = new Date().getTime();
//           if (currentTime % 3000 === 0) {
//             const counts = {};
//             confidence.forEach((value) => {
//               counts[value] = (counts[value] || 0) + 1;
//             });
//             const repeatedNumbers = Object.keys(counts).filter(
//               (key) => counts[key] > 1
//             );
//             if (repeatedNumbers.length > 0) {
//               const maxRepeatedNumber = Math.max.apply(null, repeatedNumbers);
//               console.log("Max repeated number:", maxRepeatedNumber);
//             }
//           }
//           // setEmoji(gesture.gestures[maxConfidence].name);
//           // console.log(emoji);
//         }
//       }

//       ///////// NEW STUFF ADDED GESTURE HANDLING

//       // Draw mesh
//       const ctx = canvasRef.current.getContext("2d");
//       drawHand(hand, ctx);
//     }
//   };

//   useEffect(()=>{runHandpose()},[]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Webcam
//           ref={webcamRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }}
//         />

//         <canvas
//           ref={canvasRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }}
//         />
//         {/* NEW STUFF */}
//         {emoji !== null ? (
//           <img
//             src={images[emoji]}
//             style={{
//               position: "absolute",
//               marginLeft: "auto",
//               marginRight: "auto",
//               left: 400,
//               bottom: 500,
//               right: 0,
//               textAlign: "center",
//               height: 100,
//             }}
//           />
//         ) : (
//           ""
//         )}

//         {/* NEW STUFF */}
//       </header>
//     </div>
//   );
// }

// export default App;




import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import { drawHand } from "./utilities";

import {loveYouGesture} from "./LoveYou"; 
import {PaperGesture} from "./Paper"; 
import {leftGesture} from "./Left"; 
import {rightGesture} from "./Right"; 

import * as fp from "fingerpose";
import victory from "./victory.png";
import thumbs_up from "./thumbs_up.png";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [emoji, setEmoji] = useState(null);
  const images = { thumbs_up: thumbs_up, victory: victory };
  const [consoleOutput, setConsoleOutput] = useState([]);

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await net.estimateHands(video);
      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          // fp.Gestures.ThumbsUpGesture,
          loveYouGesture,
          PaperGesture,
          leftGesture
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          // console.log(gesture.gestures);
          setConsoleOutput(prevOutput => [...prevOutput, gesture.gestures]);
          if (consoleOutput.length >= 30) {
            const flattenedOutput = consoleOutput.flat();
            const counts = {};
            flattenedOutput.forEach(item => {
              counts[item.name] = (counts[item.name] || 0) + 1;
            });
            const maxRepeatedNumber = Object.entries(counts).reduce(
              (a, b) => (b[1] > a[1] ? b : a)
            );
            console.log(`Max repeated number: ${maxRepeatedNumber[0]}`);
            setConsoleOutput([]);
          }
        }
      }
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (consoleOutput.length >= 30) {
        const flattenedOutput = consoleOutput.flat();
        const counts = {};
        flattenedOutput.forEach(item => {
          counts[item.name] = (counts[item.name] || 0) + 1;
        });
        const maxRepeatedNumber = Object.entries(counts).reduce(
          (a, b) => (b[1] > a[1] ? b : a)
        );
        console.log(`Max repeated number: ${maxRepeatedNumber[0]}`);
        setConsoleOutput([]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [consoleOutput]);

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />

        {emoji !== null && (
          <img
            src={images[emoji]}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 400,
              bottom: 500,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          />
        )}
      </header>
    </div>
  );
}

export default App;
