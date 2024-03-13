export function limitStringLength(inputString, maxLength) {
  if (inputString.length <= maxLength) {
    return inputString;
  } else {
    return inputString.substring(0, maxLength - 3) + "...";
  }
}

export const extractFilename = (uri) => {
   const pathArray = uri.split("/");
   return pathArray[pathArray.length - 1];
 };