import "./App.css";
import EntriesSection, { entries } from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { uid } from "uid";
import { useState } from "react";

function App() {
  const [entriesState, setEntries] = useState(entries);
  const handleForm = (data) => {
    console.log(data.get("motto"));
    const newEntries = [
      ...entries,
      {
        motto: data.get("motto"),
        id: uid(),
        notes: data.get("notes"),
        date: new Date().toLocaleDateString("en-us", { dateStyle: "medium" }),
      },
    ];
    setEntries(newEntries)
  };

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm handleForm={handleForm} />
        <EntriesSection entriesImport={entriesState} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
