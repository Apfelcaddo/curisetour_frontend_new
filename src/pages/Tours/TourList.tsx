// src/pages/Tours/TourList.tsx
import React, { useEffect, useState } from 'react';
import { Tour } from '../../types';
import { getTours, deleteTour } from '../../services/tourService';
import { Link } from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth';
import { ROLES } from '../../utils/constants';

interface TourListProps {
  isAdmin?: boolean;
}

const TourList: React.FC<TourListProps> = ({ isAdmin = false }) => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await getTours();
        setTours(data.tours);
      } catch (err) {
        setError('Failed to fetch tours');
      }
    };
    fetchTours();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteTour(id);
      setTours(tours.filter((tour) => tour.id !== id));
    } catch (err) {
      setError('Failed to delete tour');
    }
  };

  return (
    <div>
      <h2>Tours</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isAdmin && (
        <Link to="/tours/create">
          <button>Create New Tour</button>
        </Link>
      )}
              <Link to="/tours/create">
          <button>Create New Tour</button>
        </Link>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>
            <Link to={`/tours/${tour.id}`}>{tour.name}</Link>
            {isAdmin && (
              <>
                <Link to={`/tours/edit/${tour.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(tour.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TourList;