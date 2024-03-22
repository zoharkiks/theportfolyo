export  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    const startMonth = start.toLocaleString('default', { month: 'long' });
    const startYear = start.getFullYear();
    const endMonth = end.toLocaleString('default', { month: 'long' });
    const endYear = end.getFullYear();
  
    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  };