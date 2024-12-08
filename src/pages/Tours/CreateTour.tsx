// src/pages/Tours/CreateTour.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createTour } from '../../services/tourService';
import { Tour } from '../../types/Tour';
import styles from './CreateTour.module.css';
import Button from '../../components/common/Button/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CreateTour: React.FC = () => {
  const navigate = useNavigate();

  const initialValues: Partial<Tour> = {
    title: '',
    description: '',
    price: 0,
    duration: '',
    imageUrl: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().positive('Price must be positive').required('Price is required'),
    duration: Yup.string().required('Duration is required'),
    imageUrl: Yup.string().url('Invalid URL').required('Image URL is required'),
  });

  const onSubmit = async (values: Partial<Tour>, { setSubmitting, setErrors }: any) => {
    try {
      await createTour(values);
      navigate('/tours');
    } catch (err) {
      setErrors({ submit: 'Failed to create tour.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Create New Tour</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting, errors }) => (
          <Form className={styles.form}>
            {errors.submit && <p className={styles.error}>{errors.submit}</p>}
            <label>
              Title:
              <Field type="text" name="title" />
              <ErrorMessage name="title" component="div" className={styles.error} />
            </label>
            <label>
              Description:
              <Field as="textarea" name="description" />
              <ErrorMessage name="description" component="div" className={styles.error} />
            </label>
            <label>
              Price:
              <Field type="number" name="price" />
              <ErrorMessage name="price" component="div" className={styles.error} />
            </label>
            <label>
              Duration:
              <Field type="text" name="duration" />
              <ErrorMessage name="duration" component="div" className={styles.error} />
            </label>
            <label>
              Image URL:
              <Field type="text" name="imageUrl" />
              <ErrorMessage name="imageUrl" component="div" className={styles.error} />
            </label>
            <Button label="Create Tour" type="submit" disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTour;