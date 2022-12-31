import React from "react";

function footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <p>Copyright {year} </p>
    </footer>
  );
}

export default footer;
