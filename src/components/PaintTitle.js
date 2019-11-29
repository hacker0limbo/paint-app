import React, { useState } from 'react'

const PaintTitle = () => {
  const [title, setTitle] = useState('')
  
  return (
    <label className="header-name">
      <input 
        value={title}
        onChange={e => setTitle(e.target.value)}
        onClick={e => e.target.setSelectionRange(0, e.target.value.length)}
        placeholder="Untitled"
      />
    </label>
  )
}

export default React.memo(PaintTitle)