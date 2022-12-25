import { useSelector } from 'react-redux';

export const CarValue = () => {
  const carList = useSelector(state => state.cars.cars);
  const searchTerm = useSelector(state => state.cars.searchTerm);

  const filtredCars = carList.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const content = filtredCars.reduce((acc, car) => acc += parseFloat(car.price), 0);

  return (
    <div className='car-value'>
      Total value: ${content}
    </div>
  )
};
