

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
  if (secondsFromTimestamp - timestamp < 86400) {
  }
  console.log(secondsFromTimestamp);
};

export const getDate = (timestamp) => {
  // Ví dụ: 22/5/2013 00:00:00
  var date = new Date(timestamp * 1000);
  return date.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  });
};

export const getYear = (timestamp) => {
  // Ví dụ: 22/5/2013 00:00:00
  var date = new Date(timestamp * 1000);

  return date.toLocaleDateString("vi-VN", {
    year: "numeric"
  });
};

export const getPercentRadioTime = (hasSongRequest, inStart, inEnd) => {
  if (hasSongRequest) {
    return 0;
  }

  const start = inStart * 1000;
  const end = inEnd * 1000;
  const now = Date.now();
  const getFull = end - start;
  const getNow = now - start;

  return (getNow / getFull) * 360;
};

export const getTimeFormMinute = (seconds) => {
  // Tính số phút từ số giây
  const minute = Math.floor(seconds / 60);
  // Tính số giây từ số giây còn lại sau khi đã tính số phút
  const hour =
    Math.floor(minute / 60) >= 10
      ? Math.floor(minute / 60) + " giờ"
      : "0" + Math.floor(minute / 60) + " giờ";
  const newMinute = minute % 60;
  // Trả về thời gian trong định dạng phút:giây

  if (Math.floor(minute / 60) === 0) {
    return newMinute >= 10 ? newMinute + " phút" : "0" + newMinute + " phút";
  }
  return (
    hour +
    " : " +
    (newMinute >= 10 ? newMinute + " phút" : "0" + newMinute + " phút")
  );
};

export const converNumber = (numebr) => {
  let convertNumber = numebr + "";
  if (numebr > 999) {
    return convertNumber.substring(0, convertNumber.length - 4) + "k";
  }

  return numebr;
};

export const chartColor = (i) => {
  switch (i) {
    case 0:
      return "#4a90e2";
    case 1:
      return "#50e3c2";
    case 2:
      return "#e35050";
    default:
      return "#4a90e2";
  }
};

export const rankStatus = (number) => {
  if (number < 0) {
    return {
      number: -number,
      color: "#e35050",
      icon: 'down'
    };
  }

  if (number > 0) {
    return {
      number: number,
      color: "#1dc186",
      icon: 'up'
    };
  }

  return {
    number: number,
    color: "#696969",
    icon: 'none'
  };
};
