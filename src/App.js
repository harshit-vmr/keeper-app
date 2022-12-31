import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <div className="note">
        <p>This is the note title</p>
        <p>This is the note content</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
