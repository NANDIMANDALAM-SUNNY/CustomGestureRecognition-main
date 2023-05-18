// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const leftGesture = new GestureDescription('left'); 

// Thumb 
leftGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
leftGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
// leftGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Index
// leftGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
// leftGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// Pinky
// leftGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
// leftGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

for(let finger of [Finger.Middle, Finger.Ring,Finger.Pinky,Finger.Index]){
    leftGesture.addCurl(finger, FingerCurl.FullCurl, .75); 
    leftGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}




