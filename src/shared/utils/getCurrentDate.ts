export function getCurrentDate(dateString: string): string {
  const dateObject = new Date(dateString);

  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  const formattedDate = `${day}.${month < 10 ? '0' : ''}${month}.${year}`;
  return formattedDate;
}
