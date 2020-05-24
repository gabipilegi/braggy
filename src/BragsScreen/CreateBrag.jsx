import React from 'react'

const CreateBrag = ({ brag, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter Brag Here"
        value={brag}
        onChange={onChange}
      />
      <button className="button">Submit</button>
    </form>
  )
}

export default CreateBrag
