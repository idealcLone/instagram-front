export const getRandomImage = (type: string) => {
  const id = Math.random() * 10000;
  return `https://source.unsplash.com/random?${type}&${id}`;
};
