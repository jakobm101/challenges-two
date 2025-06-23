import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);
  const handleDelete = (tag) => {
    const newTags = tags.filter((currentTag) => currentTag !== tag);
    setTags(newTags);
  };

  const handleAddTag = (data) => {
    setTags([...tags, data]);
  };

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDelete} />
    </main>
  );
}
