import { useState } from "react";

import "./App.css";
import { Form } from "./components/Form";
import { Review } from "./components/Review";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    comments: "",
  });
  const [isReview, setIsReview] = useState(false);
  const editForm = () => {
    setIsReview(true);
  };
  const reviewForm = () => {
    setIsReview(false);
  };
  return (
    <>
      <h1>7.3- Form Review</h1>
      <div className="card">
        {isReview ? (
          <Review reviewForm={reviewForm} formData={formData} />
        ) : (
          <Form
            editForm={editForm}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </>
  );
}

export default App;
