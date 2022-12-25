import { useSelector } from 'react-redux';
import { Car } from "./Car";

export const CarList = () => {
  const carList = useSelector(state => state.cars.cars);
  const { name } = useSelector(state => state.form);
  const searchTerm = useSelector(state => state.cars.searchTerm);

  const filtredCars = carList.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const content = filtredCars.map(car => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return <Car className={`panel ${bold && "bold"}`} key={car.id} car={car} />
  })

  return (
    <div className='car-list'>
      {content}
      <hr />
    </div>
  )
};