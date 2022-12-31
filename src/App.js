import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import notes from "./components/notes"

function createNotes(note) {
  return <Note 
            key ={note.key} 
            title={note.title} 
            content={note.content} 
          />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
