import React from "react";

function Note(attr) {
  return (
    <div className="note">
      <p>{attr.title}</p>
      <p>{attr.content}</p>
    </div>
  );
}

export default Note;
