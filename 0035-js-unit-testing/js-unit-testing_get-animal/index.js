export function getAnimal(animal) {
  switch (true) {
    case animal === "cats":
      return "I totally love cats!";
    case typeof animal !== "string":
      return "I do not like animals at all!";
    default:
      return `I like ${animal}!`;
  }
}
