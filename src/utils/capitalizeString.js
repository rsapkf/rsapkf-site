// capitalize the first letter of a string
export const capitalizeString = string => {
  return string.replace(/^\w/, c => c.toUpperCase())
  // return string.charAt(0).toUpperCase() + string.slice(1)
}
