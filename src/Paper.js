import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 


// create new gesture with id "paper"
export const PaperGesture = new GestureDescription('paper');
// PaperGesture.addCurl(Finger.Index, FingerCurl.NoCurl);

PaperGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
PaperGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// PaperGesture.addCurl(Finger.Middle, FingerCurl.NoCurl);
PaperGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
PaperGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.25);


// PaperGesture.addCurl(Finger.Ring, FingerCurl.NoCurl);
PaperGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0)
PaperGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.25);



// PaperGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl);
PaperGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
PaperGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);


// PaperGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl);
// PaperGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
// PaperGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.25);
PaperGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
PaperGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
PaperGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);