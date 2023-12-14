import React from 'react'
import { Link } from 'react-router-dom';

const NoteItem = ({ note }) => {
  return (
    <Link to={`/edit-note/${note.id}`} className='note'>
      <h4>
        {note.title.length > 30 ? note.title.slice(0, 20) + "..." : note.title}
      </h4>
      <p>{note.date}</p>

    </Link>
  )
}

export default NoteItem