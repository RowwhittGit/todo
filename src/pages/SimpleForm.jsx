import React, { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  return (
    <div className="p-6">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
        placeholder="Enter your name"
      />

      <p className="mt-4">Your name is: {name}</p>
    </div>
  );
}

export default SimpleForm;
