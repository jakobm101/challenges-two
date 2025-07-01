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

export function getPeopleByLastName(people, lastName) {}

export function findPersonById(people, id) {}

export function isAnyoneOlderThan(people, age) {}

export function getLastNamesSortedByAge(people) {}
