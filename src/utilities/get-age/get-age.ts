export const getAge = (timestamp: number) => {
  const day = new Date(timestamp)
  return Math.floor((Date.now() - day.getTime()) / 1000 / 60 / 60 / 24 / 365.25)
}