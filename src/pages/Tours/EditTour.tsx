// src/pages/Tours/EditTour.tsx

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchTourById, updateTour } from '../../services/tourService';
import { Tour } from '../../types/Tour';
import styles from './EditTour.module.css';
import Button from '../../components/common/Button/Button';

const EditTour: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<Partial<Tour>>({
    title: '',
    description: '',
    price: 0,
    duration: '',
    imageUrl: '',
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const getTour = async () => {
      try {
        if (id) {
          const data = await fetchTourById(id);
          setFormData(data);
        }
      } catch (err) {
        setError('Failed to fetch tour details.');
      } finally {
        setLoading(false);
      }
    };

    getTour();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updateTour(id, formData);
        navigate('/tours');
      }
    } catch (err) {
      setError('Failed to update tour.');
    }
  };

  if (loading) return <p>Loading tour details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <h1>Edit Tour</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title || ''} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description || ''} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price || 0} onChange={handleChange} required />
        </label>
        <label>
          Duration:
          <input type="text" name="duration" value={formData.duration || ''} onChange={handleChange} required />
        </label>
        <label>
          Image URL:
          <input type="text" name="imageUrl" value={formData.imageUrl || ''} onChange={handleChange} required />
        </label>
        <Button label="Update Tour" type="submit" />
      </form>
    </div>
  );
};

export default EditTour;
