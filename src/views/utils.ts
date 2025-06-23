export function getRandomInt(max = 4) {
  return Math.floor(Math.random() * max);
}

export function decodeQ(encoded: string) {
  return decodeURIComponent(encoded);
}
