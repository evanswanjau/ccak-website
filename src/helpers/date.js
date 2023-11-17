module.exports.simpleDate = (date) => {
  if (date) {
    let eventDate = new Date(date);
    let day = eventDate.getDate();
    let month = eventDate.toString().split(" ")[1];
    let year = eventDate.getFullYear();
    let hours = eventDate.getHours();
    let minutes = eventDate.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return day + nth(day) + " " + month + " " + year + ", " + strTime;
  } else {
    return "__:__:__";
  }
};

const nth = (d) => {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

module.exports.simpleDateTime = (date) => {
  const currentTimestamp = new Date();
  const inputTimestamp = new Date(date);

  const timeDifference = (currentTimestamp - inputTimestamp) / (1000 * 60); // Time difference in minutes

  if (timeDifference < 1) {
    return "now";
  } else if (timeDifference < 60) {
    return `${Math.floor(timeDifference)} mins ago`;
  } else if (timeDifference < 1440) {
    // Less than 24 hours
    return `${Math.floor(timeDifference / 60)} hrs ago`;
  } else {
    const daysAgo = Math.floor(timeDifference / 1440);

    // Display the actual date in the format of "day/month"
    const options = { day: "numeric", month: "numeric" };
    const formattedDate = inputTimestamp.toLocaleDateString("en-US", options);

    return formattedDate;
  }
};
