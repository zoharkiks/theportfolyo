import { extractColors } from "extract-colors";

export const formatDateRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startMonth = start.toLocaleString("default", { month: "long" });
  const startYear = start.getFullYear();
  const endMonth = end.toLocaleString("default", { month: "long" });
  const endYear = end.getFullYear();

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
};

export const getIst = () => {
  var currentTime = new Date();
  var currentOffset = currentTime.getTimezoneOffset();

  var ISTOffset = 330; // IST offset UTC +5:30

  var ISTTime = new Date(
    currentTime.getTime() + (ISTOffset + currentOffset) * 60000
  );

  var hours = ISTTime.getHours().toString().padStart(2, "0");
  var minutes = ISTTime.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes} GMT (+05:30)`;
};

// Function to generate background gradients with radial gradients from HSL values
export const generateRandomGradient = (colorsArray) => {
  const hex1 = colorsArray[0].hex
  const hex2 = colorsArray[1].hex
  const hex3 = colorsArray[2].hex

  return{

    backgroundImage: `linear-gradient( ${hex1}, ${hex2}, ${hex3})`,
  }

};
