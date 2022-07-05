const prevDateMilliseconds = new Date(2022, 4, 8).getTime()
const nextDateMilliseconds = new Date(2022, 4, 9).getTime()
const oneDayInMilliseconds = (nextDateMilliseconds - prevDateMilliseconds)
const midnightForCurrentTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()
const prevYearStart = new Date(new Date().getFullYear() - 1, 0, 1).getTime()
const currentYearStart = new Date(new Date().getFullYear(), 0, 1).getTime()

export {
   oneDayInMilliseconds,
   midnightForCurrentTime,
   prevYearStart,
   currentYearStart
}
