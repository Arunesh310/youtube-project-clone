export const API_KEY = "AIzaSyBH9vr-B_--_PvtYSdKF-yV3Dxzo7iDU7Q";
//this we are making to use to convert the values in million and thousand

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
