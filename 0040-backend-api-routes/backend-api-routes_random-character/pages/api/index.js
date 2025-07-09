import Chance from "chance";

const chance = new Chance();

export default function handler(req, res) {
  res.status(200).json({
    name: chance.name(),
    birthday: chance.birthday(),
    "soul animal": chance.animal(),
    email: chance.email(),
    city: chance.city(),
  });
}
