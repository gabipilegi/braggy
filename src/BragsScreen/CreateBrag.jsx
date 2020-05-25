import React from 'react'

const CreateBrag = ({ brag, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit} data-testid="brag-form">
      <label htmlFor="brag">Brag:</label>
      <input
        id="brag"
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
