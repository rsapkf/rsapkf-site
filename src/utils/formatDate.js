// 2021-01-23T15:34:05.430Z -> Sat, Jan 23, 2021, 10:34:05 AM
export const formatDate = dateString => {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: "false",
  }
  return new Date(dateString).toLocaleDateString("en-US", options)
}
