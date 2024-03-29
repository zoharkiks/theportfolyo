
// Function to format the date range
export const formatDateRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startMonth = start.toLocaleString("default", { month: "long" });
  const startYear = start.getFullYear();
  const endMonth = end.toLocaleString("default", { month: "long" });
  const endYear = end.getFullYear();

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
};

// Function to get the current time in the India Standard Time (IST)
export const getIst = () => {
  const currentTime = new Date();

  const currentOffset = currentTime.getTimezoneOffset();

  const ISTOffset = 330;

  const ISTTime = new Date(
    currentTime.getTime() + (ISTOffset + currentOffset) * 60000
  );

  const hours = ISTTime.getHours().toString().padStart(2, "0");
  const minutes = ISTTime.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes} GMT (+05:30)`;
};

// Function to generate background gradients with radial gradients from HSL values
export const generateRandomGradient = (colorsArray) => {
  const hex1 = colorsArray[0].hex;
  const hex2 = colorsArray[1].hex;
  const hex3 = colorsArray[2].hex;

  return {
    backgroundImage: `linear-gradient( ${hex1}, ${hex2}, ${hex3})`,
  };
};
