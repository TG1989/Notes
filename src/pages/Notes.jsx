import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import notes from './dummy_notes';
import NoteItem from '../component/NoteItem';
import { Link } from 'react-router-dom';



const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false)

  const [text, setText] = useState('')
  const [filteredNotes, setFilteredNotes] = useState(notes)

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {

        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note
        }
      }))
  }

  useEffect(handleSearch, [text])

  return (
    <section className='container'>

      <header className='notes__header'>
        {!showSearch && <h2>My Notes</h2>}

        {showSearch && (
          <input type="text" placeholder='Search' onChange={(e) => {
            setText(e.target.value)
            handleSearch()
          }} />
        )}

        <button className='btn' onClick={()=>setShowSearch(prevState => !prevState)}>
          {showSearch ? <IoMdClose /> : <CiSearch />}
        </button>
      </header>

      <div className="notes__container">
        {filteredNotes.length == 0 && (<p className='empty_notes'>Add your notes...</p>)}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link className='btn add__btn' to='create-note' >
        <FaPlus />
      </Link>
    </section>
  )
}

export default Notes