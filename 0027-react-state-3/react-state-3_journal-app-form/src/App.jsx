import "./App.css";
import EntriesSection, { entries } from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { uid } from "uid";
import { useState } from "react";

function App() {
  const [entriesState, setEntries] = useState(entries);
  console.log({entriesState});
  
  
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm />
        <EntriesSection entriesImport={entriesState} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
