import './ImageList.css';

/* 
    *key property
    Если мы хотим отрендерить список компонентов,
    нам необходимо каждому из них присвоить "key".
    Он должен быть уникальным для каждого элемента внутри списка.
    
    Если наш список будет меняться, то это как-раз именно тот
    атрибут, который поможет React не перерисовывать всю коллекцию,
    а только те элементы которые изменились.

    *key requeries:
    1) Атрибут применяется к самому верхнему JSX-элементу
    2) Должен быть уникальным для кадого элемента коллекции
    3) Должны быть уникальными при каждом ререндеринге
*/

import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map(({ id, alt_description, urls: { small } }) =>
        <ImageShow key={id} src={small} alt={alt_description} />)}
    </div>
  )
}

export default ImageList;