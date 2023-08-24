module.exports.simpleDate = (date) => {
  if (date) {
    let newDate = new Date(date).toString();

    newDate = newDate.split(" ");

    return (
      newDate[2].replace(/^0+/, "") +
      nth(newDate[2]) +
      " " +
      newDate[1] +
      " " +
      newDate[3]
    );
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
