export const randomAnimal = () => {
  const animals = ["bird", "cat", "dog", "cow", "gator", "horse"];

  return [animals[Math.floor(Math.random() * animals.length)], animals.length];
}