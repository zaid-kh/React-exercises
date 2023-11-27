import React from "react";

export const Form = ({ editForm, formData, setFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    // in any name gotten by the input handler modify the corresponding name:value pair
    setFormData({ ...formData, [name]: value });
  };
  const handleSelect = (e) => {
    const { name, value } = e.target;
    // in any name gotten by the input handler modify the corresponding name:value pair
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInput}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleInput}
      />
      <label htmlFor="age">Age</label>
      <select name="age" id="age" value={formData.age} onChange={handleSelect}>
        <option value="0-15">0-15</option>
        <option value="16-25">16-25</option>
        <option value="26+">26+</option>
      </select>
      <label htmlFor="comments">Comments</label>
      <textarea
        name="comments"
        id="comments"
        cols="30"
        rows="5"
        value={formData.comments}
        onChange={handleInput}
      ></textarea>
      <button onClick={editForm} type="submit">
        Submit
      </button>
    </form>
  );
};
