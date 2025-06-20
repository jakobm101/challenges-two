import Card from "./components/Card";

export default function App() {
  const fruits = [];
  const names = ["banana", "apple", "cherry", "chili", "tomato"];
  const colors = ["yellow", "red", "red", "red", "green"];
  names.map(() => fruits.push({}));
  fruits.map((fruit, index) => {
    fruit["name"] = names[index];
    fruit["color"] = colors[index];
    fruit["index"] = index;
  });
  console.log({ fruits });

  return (
    <div className="app">
      {fruits.map(({color, name}, index) => (
        <Card color={color} key={index}>
          {name}
        </Card>
      ))}
      <Card name="🍌 banana" />
      <Card />
    </div>
  );
}
