import { useState } from 'react';
import Modal from "../components/Modal";
import Button from '../components/Button';

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const modalContent =
    <div className='h-full flex flex-col justify-between'>
      <h1>Hello, it's me!</h1>
      <div className='flex justify-end'>
        <Button onClick={handleClick} primary>Close modal</Button>
      </div>
    </div>;

  return (
    <div>
      <Button primary onClick={handleClick}>Open Modal</Button>
      {isOpen && <Modal onClose={setIsOpen}>{modalContent}</Modal>}
    </div>)
};

export default ModalPage;