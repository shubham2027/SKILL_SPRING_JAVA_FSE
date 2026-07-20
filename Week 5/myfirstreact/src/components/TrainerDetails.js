import React from 'react';
import { useParams, Link } from 'react-router-dom';
import trainers from '../TrainersMock';

const TrainerDetail = () => {
  const { id } = useParams();
  const trainer = trainers.find((t) => String(t.TrainerId) === String(id));

  if (!trainer) {
    return (
      <div>
        <h2>Trainer Details</h2>
        <p style={{ color: 'red' }}>Trainer with ID {id} not found.</p>
        <Link to="/trainers">Back to Trainers List</Link>
      </div>
    );
  }

  const skillsList = Array.isArray(trainer.Skills)
    ? trainer.Skills.join(', ')
    : trainer.Skills;

  return (
    <div>
      <h2>Trainer Details</h2>
      <div style={{ lineHeight: '1.8', margin: '15px 0' }}>
        <p><strong>Trainer ID:</strong> {trainer.TrainerId}</p>
        <p><strong>Name:</strong> {trainer.Name}</p>
        <p><strong>Email:</strong> {trainer.Email}</p>
        <p><strong>Phone:</strong> {trainer.Phone}</p>
        <p><strong>Technology:</strong> {trainer.Technology}</p>
        <p><strong>Skills:</strong> {skillsList}</p>
      </div>
      <Link to="/trainers">Back to Trainers List</Link>
    </div>
  );
};

export default TrainerDetail;
export { TrainerDetail };
