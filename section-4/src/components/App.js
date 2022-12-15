import '../App.css';
import React, { useState } from 'react';
import AnimalShow from './AnimalShow';
import { randomAnimal } from '../helpers/random-animal';

/* 
    *React event system
    Позволяет отслеживать взаимодействие пользователя с нашим веб-приложением
    и реагировать на эти взаимодействие.
    !Важно. Изменять состояние компонента можно, используя сеттер для изменения.
    Под капотом, он фактически заменяет один объект на другой.
    Тоесть является чистой функцией.

    Когда состояние изменяется, наш компонент полностью или частично
    перерисовывается (дочерние компонеты соответсвенно, так как 
    DOM or Virtual DOM имеет древовидную схему).
*/

/* 
    *React state system
    Локальное хранилище компонента, доступное для изменения только ему.
    Может передаваться вниз по иерархии.
    Необходимо для создания динамики в веб-приложении.
*/



const App = () => {
  //В коде ниже, происходит деструктуризация массива. Смотреть (1)
  const [animals, setAnimals] = useState([]);

  const handleClickOnButton = () => {
    const [animal, length] = randomAnimal();

    if (animals.length === length) {
      console.log("We don't have animals anymore :(");
      return;
    }

    const uniqueAnimal = animals.findIndex(el => el === animal);

    if (uniqueAnimal !== -1) {
      handleClickOnButton();
    } else {
      setAnimals([...animals, animal]);
    }
  }

  return (
    <div className='app'>
      <button onClick={handleClickOnButton}>Add Animal</button>
      <div className='animal-list'>
        {animals.map((type) => <AnimalShow key={type} type={type} />)}
      </div>
    </div>
  );
}

export default App;

//* (1) Array Destructuring
// const tecnologies = ["HTML", "CSS"];
// const HTML = tecnologies[0]; //"HTML"
// const CSS = tecnologies[1]; //"CSS"
//OR
// const [HTML, CSS] = tecnologies;
// console.log(HTML);
// console.log(CSS);