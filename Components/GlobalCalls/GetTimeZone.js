const getCurrentTimeInfo = () => {
    const now = new Date();
  
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const time = `${hours}:${minutes}:${seconds}`;
  
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(now.getDate()).padStart(2, '0');
  
    const date = `${year}-${month}-${day}`;
  
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
    const hour = now.getHours();
    let partOfDay = '';
    if (hour >= 5 && hour < 12) {
      partOfDay = 'morning';
    } else if (hour >= 12 && hour < 17) {
      partOfDay = 'morning';
    } else if (hour >= 17 && hour < 20) {
      partOfDay = 'evening';
    } else {
      partOfDay = 'night';
    }
  
    return { time, date, timeZone, partOfDay };
  };
  export default getCurrentTimeInfo