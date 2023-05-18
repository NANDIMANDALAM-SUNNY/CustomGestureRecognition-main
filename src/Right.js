// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const rightGesture = new GestureDescription('right'); 

// Thumb 
rightGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
rightGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);
// rightGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Index
// rightGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
// rightGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// Pinky
// rightGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
// rightGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

for(let finger of [Finger.Middle, Finger.Ring,Finger.Pinky,Finger.Index]){
    rightGesture.addCurl(finger, FingerCurl.FullCurl, .75); 
    rightGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}




