import { useState } from "react";

const useForm = (initialValues, onSubmit) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return {
    formData,
    handleChange,
    setFormData,
    handleSubmit,
  };
};

export default useForm;
