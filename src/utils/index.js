export  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    const startMonth = start.toLocaleString('default', { month: 'long' });
    const startYear = start.getFullYear();
    const endMonth = end.toLocaleString('default', { month: 'long' });
    const endYear = end.getFullYear();
  
    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  };

  export const getIst = () => {
    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
  
    var ISTOffset = 330; // IST offset UTC +5:30
  
    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
  
    var hours = ISTTime.getHours().toString().padStart(2, '0');
    var minutes = ISTTime.getMinutes().toString().padStart(2, '0');
  
    return `${hours}:${minutes} GMT (+05:30)`;
  }