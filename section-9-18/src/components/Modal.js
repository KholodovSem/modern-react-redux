import { useEffect } from "react";
import ReactDOM from 'react-dom';

/* 
    Modal window

    Модальное окно позицианируется с помощью отличной от статичной позиции.
    Для того чтобы оно работало корректно, нам необходимо вынести наше 
    модальное окно каким-то образом за пределы корневого рута.

    В Реакте это можно сделать с помощью портала:
    React.createPortal() - обёртка над компонентом, которая выполняет задачу 
    вынесение компонента из рутового дива.

    Первым аргементом принимает компонент, который необходимо вынести, вторым
    HTML-элемент, куда нужно вынести.
    Поэтому предварительно нужно такой компонент создать в файле HTML.
*/

const modalContainerRef = document.getElementById('modal-container');

const Modal = ({ children, onClose }) => {

  useEffect(() => {
    document.querySelector('body').style.overflow = 'hidden';


    return () => {
      document.querySelector('body').style.overflow = '';
    }

  }, [])

  return ReactDOM.createPortal(
    <div className='overflow-y-hidden'>
      <div onClick={() => onClose(false)} className='fixed inset-0 bg-gray-300 opacity-80'></div>
      <div className='fixed inset-40 p-10 bg-white'>
        {children}
      </div>
    </div>, modalContainerRef)
};

export default Modal;