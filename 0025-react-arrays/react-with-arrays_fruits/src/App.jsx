import Card from "./components/Card";

export default function App() {
  const fruits = [];
  const names = ["banana", "apple", "cherry", "chili", "tomato"];
  const colors = ["yellow", "red", "red", "red", "Tomato"];
  names.map(()=> fruits.push({}))
  fruits.map((fruit, index) => {
    fruit["name"] = names[index];
    fruit['colors'] = colors[index];
    fruit['index'] = index
  });
  console.log({fruits});
  

  return (
    <div className="app">
      <Card name="🍌 banana" />
    </div>
  );
}
