import { useDispatch, useSelector } from 'react-redux';
import { changeName, changePrice, addCar } from '../store';

export const CarForm = () => {
  const { name, price } = useSelector(state => state.form);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (name) {
      case "carName": {
        dispatch(changeName(value));
        break;
      }

      case "carPrice": {
        dispatch(changePrice(value));
        break;
      }

      default: {
        return;
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const car = {
      name,
      price
    }

    dispatch(addCar(car));
  }

  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add car</h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label' htmlFor='car-name'>Name</label>
            <input
              className='input is-expanded'
              id="car-name"
              name='carName'
              type='text'
              onChange={handleChange}
              value={name}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label' htmlFor='car-price'>Price</label>
          <input
            className='input is-expanded'
            id='car-price'
            name='carPrice'
            type='text'
            onChange={handleChange}
            value={price || ''}
          />
        </div>
        <div className='field'>
          <button className='button is-link' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
};

