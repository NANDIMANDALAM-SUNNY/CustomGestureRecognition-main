// Import dependencies
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// Define Gesture Description
export const heartGesture = new GestureDescription('heart');

// Thumb 
heartGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
heartGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.25);

// Index
heartGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
heartGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.25);

// Middle
heartGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
heartGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.25);

// Ring
heartGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
heartGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.25);

// Pinky
heartGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
heartGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.25);
