import React, { useEffect } from 'react';
import { useFormik } from 'formik';

const BookForm = ({ onSubmit, initialData }) => {
  const formik = useFormik({
    initialValues: {
      title: initialData ? initialData.name : '',
      author: initialData ? initialData.author.name : '',
      published_date: initialData ? initialData.published_date : '',
      isbn_number: initialData ? initialData.isbn_number : '',
    },
    onSubmit: (values) => {
      onSubmit(values);
      formik.resetForm();
    },
  });

  useEffect(() => {
    formik.setValues({
      title: initialData ? initialData.name : '',
      author: initialData ? initialData.author.name : '',
      published_date: initialData ? initialData.published_date : '',
      isbn_number: initialData ? initialData.isbn_number : '',
    });
  }, [initialData]);

  return (
    <div className="form">
      <h2>Add Book</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" onChange={formik.handleChange} value={formik.values.title} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" name="author" onChange={formik.handleChange} value={formik.values.author} />
        </div>
        <div>
          <label>Published on:</label>
          <input type="text" name="published_date" onChange={formik.handleChange} value={formik.values.published_date} />
        </div>
        <div>
          <label>ISBN:</label>
          <input type="text" name="isbn_number" onChange={formik.handleChange} value={formik.values.isbn_number} />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
