export const formatDate = (
  date: Date | string,
  options: { format: 'MM.DD HH:mm' | 'YYYY.MM.DD' | 'MM.DD' | 'YYYY.MM.DD HH:mm' },
) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const { format = 'MM.DD HH:mm' } = options;

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');

  switch (format) {
    case 'YYYY.MM.DD':
      return `${year}.${month}.${day}`;
    case 'MM.DD':
      return `${month}.${day}`;
    case 'YYYY.MM.DD HH:mm':
      return `${year}.${month}.${day} ${hours}:${minutes}`;
    case 'MM.DD HH:mm':
    default:
      return `${month}.${day} ${hours}:${minutes}`;
  }
};
