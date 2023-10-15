import React, { useEffect } from 'react';
import { useFormik } from 'formik';

const AuthorForm = ({ onSubmit, initialData }) => {
    const formik = useFormik({
      initialValues: {
        name: initialData ? initialData.name : '',
        dob: initialData ? initialData.dob : '',
        description: initialData ? initialData.description : '',
      },
      onSubmit: (values) => {
        onSubmit(values);
        formik.resetForm();
      },
    });
  
    useEffect(() => {
      
      formik.setValues({
        name: initialData ? initialData.name : '',
        dob: initialData ? initialData.dob : '',
        description: initialData ? initialData.description : '',
      });
    }, [initialData]);
  return (
    <div className="form">
      <h2>Add Author</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="text" name="dob" onChange={formik.handleChange} value={formik.values.dob} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" onChange={formik.handleChange} value={formik.values.description} />
        </div>
        <button type="submit">Add Author</button>
      </form>
    </div>
  );
};

export default AuthorForm;
