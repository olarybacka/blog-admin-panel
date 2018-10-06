import React from 'react';

const AddCategory = () => (
  <div>
    <form>
      <p>Add Category</p>
      <input
          type="text"
          value={currentCategoryName}
          onChange={handleCategoryNameChange}
          required
        />
    </form>
  </div>
)

export default AddCategory