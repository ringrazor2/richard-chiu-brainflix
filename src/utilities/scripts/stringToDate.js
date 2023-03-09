export default function stringDateFull(dateCode) {
  const date = new Date(dateCode);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dateString = `${month}/${day}/${year}`;
  return dateString;
}
