import React from "react";
import NoteDetail from "../component/NoteDetail";
import { useParams } from "react-router-dom";
import { getNote, deleteNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import DeleteButton from "../component/DeleteButton";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  function handleDelete() {
    deleteNote(id);
    navigate("/");
  }

  return <DetailPage id={id} onDelete={handleDelete} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }


  render() {
    if (!this.state.note) {
      return (
        <div className="app-container">
          <div className="notes-list-empty">
            <p>Notes not found</p>
          </div>
        </div>
      );
    }

    return (
      <div className="app-container">
        <NoteDetail {...this.state.note} />
        <DeleteButton onDelete={this.props.onDelete} />
      </div>
    );
  }
}

export default DetailPageWrapper;