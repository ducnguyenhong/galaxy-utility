export const getGmtTime = () => {
  const offset = new Date().getTimezoneOffset();
  const prefixZero = Math.abs(Math.ceil(offset / -60)) < 10 ? "0" : ""
  let timeGMT = ""

  if (offset < 0) {
    const extraZero = (-offset % 60 < 10) ? "0" : ""
    timeGMT = "GMT+" + prefixZero + Math.ceil(offset / -60) + ":" + extraZero + (-offset % 60)
  }
  else {
    const extraZero = (offset % 60 < 10) ? "0" : ""
    timeGMT = "GMT-" + prefixZero + Math.floor(offset / 60) + ":" + extraZero + (offset % 60)
  }
  return timeGMT
}