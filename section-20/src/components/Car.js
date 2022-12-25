import { useDispatch } from 'react-redux';
import { removeCar } from '../store/slices/CarSlice';

export const Car = ({ className, car }) => {
  const dispatch = useDispatch();

  const handleDeleteCar = (id) => {
    dispatch(removeCar(id))
  }

  return (
    <div className={className}>
      <p>
        {car.name} - ${car.price}
      </p>
      <button className='button is-danger' onClick={() => handleDeleteCar(car.id)}>Delete</button>
    </div>
  )
};