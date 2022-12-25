import { useDispatch, useSelector } from 'react-redux';
import { changeTerm } from '../store';

export const CarSearch = () => {
  const searchTerm = useSelector(state => state.cars.searchTerm);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.currentTarget.value;

    dispatch(changeTerm(value));
  }

  return (
    <div className='list-header'>
      <h3 className='title is-3'>My Cars</h3>
      <div className='field is-horizontal'>
        <label className='label'>Search</label>
        <input className='input' type="text" value={searchTerm} onChange={handleChange} />
      </div>
    </div>
  )
};