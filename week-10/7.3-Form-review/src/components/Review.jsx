import React from "react";

export const Review = ({ reviewForm, formData }) => {
  return (
    <div>
      <h2>Review your data</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Age: {formData.age}</p>
      <p>Comments: {formData.comments}</p>
      <button onClick={reviewForm}>Edit</button>
      <button>Looks Good!</button>
    </div>
  );
};
