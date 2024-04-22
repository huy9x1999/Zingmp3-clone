export const getArrSlider = (start, end, number) => {
  const limit = start > end ? number : end;

  let output = [];

  for (let i = start; i <= limit; i++) {
    output.push(i);
  }

  if (start > end) {
    for (let i = 0; i <= end; i++) {
      output.push(i);
    }
  }
  return output;
};

export function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];
  for (index = 0; index < arrayLength; index += chunk_size) {
    var myChunk = myArray.slice(index, index + chunk_size);
    tempArray.push(myChunk);
  }
  return tempArray;
}

export const getTimeStamp = (timestamp) => {
  // Ví dụ: 22/5/2013 00:00:00
  let secondsFromTimestamp = Math.floor(new Date(timestamp).getTime() / 1000);
  if (secondsFromTimestamp - timestamp < 86400){
   
  }
    console.log(secondsFromTimestamp);
};
