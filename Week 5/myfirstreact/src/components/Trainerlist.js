import React from 'react';
import { Link } from 'react-router-dom';
import trainers from '../TrainersMock';

const TrainersList = ({ trainersData, trainers: propsTrainers }) => {
  const list = trainersData || propsTrainers || trainers;

  return (
    <div>
      <h2>Trainers List</h2>
      <ul>
        {list.map((trainer) => (
          <li key={trainer.TrainerId} style={{ marginBottom: '8px' }}>
            <Link to={`/trainers/${trainer.TrainerId}`}>
              {trainer.Name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainersList;
export { TrainersList };
