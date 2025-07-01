export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => person.firstName + " " + person.lastName);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  result = people.filter((person) => person.age === age);
  return result.map((person) => `${person.firstName}, ${person.age}`);
}

export function getPeopleNamesOlderThan(people, age) {
  const result = people.filter((person) => person.age >= age);
  return result.map((person) => person.firstName + " " + person.lastName);
}

export function getPeopleByLastName(people, lastName) {
  const result = people.filter((person) => person.lastName === lastName);
  return result.map((person) => person.firstName + " " + person.lastName);
}

export function findPersonById(people, id) {
  const result = people.find((person) => person.id === id);
  return result.firstName;
}

export function isAnyoneOlderThan(people, age) {
  const result = people.some((person) => person.age >= age);
  return result;
}

export function getLastNamesSortedByAge(people) {
  const result = people.sort((a, b) => a.age - b.age);
  return result.map((person) => `${person.lastName} (${person.age})`);
}
