import Chance from "chance";

const chance = new Chance
console.log('⭐️',chance.name());


export default function handler(req, res) {
  res.status(200).json({name: chance.name(), birthday: chance.birthday(), 'soul animal': chance.animal()});
}
