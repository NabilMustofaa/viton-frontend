import React from "react";
import { addNote } from "../utils/local-data";
import NoteInput from "../component/NoteInput";

import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();

  function handleSubmit(title, body) {
    addNote({
      title,
      body,
    });

    navigate("/");
  }

  return (
    <div className="app-container">
      <NoteInput onSubmit={handleSubmit} />
    </div>
  );
}

export default AddPage;