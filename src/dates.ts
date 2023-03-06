const compareDates = (date1: string, date2: string): number => {
  if (date1 == date2) return 0;
  if (date1 == 'Present') return -1;
  if (date2 == 'Present') return 1;
  const year1 = parseInt(date1.substring(date1.length - 4));
  const year2 = parseInt(date2.substring(date2.length - 4));
  if (year1 != year2) return year2 - year1;
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return (
    months.indexOf(date2.substring(0, 3)) -
    months.indexOf(date1.substring(0, 3))
  );
};

export { compareDates };
