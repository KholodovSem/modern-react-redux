import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import alexaImage from '../img/alexa.png';
import cortanaImage from '../img/cortana.png';
import siriImage from '../img/siri.png';

//Динамические данные в JSX отображаються с помощью фигурых скобок - {}
//bolean, undefined, null - значение не будут отображаться в качестве значения - {true, null, undefined} 

/* 
    Component Layout 
    В верхней части компонента определяем данные, которые мы хотели бы отобразить в компоненте.
    А затем возвращаем разметку с ранее определёнными данными.
*/

/* 
    Элементы HTML с атрибутами.
    Могут принимать атрибут со значением: строка, либо любой другой тип данных, но обернутый в фигурные скобки
    <input type="number" min={5} max={variable} style={{border: "1px solid black"}}/>
*/

/* 
    *Некоторые отличия JSX
    1) All props name follow camelCase  
    2) Number attribuse use curly braces
    3) "class" in JSX equal "className"
    4) In-line styles in JSX are provide in object 
*/

/* 
    Creating a Component
    1) Create a new file. It must start with capital letter.
    2) Make your component. Should be a function that return JSX
    3) Export the component at the bottom of the file
    4) Import the component into another file
    5) Use the component 
*/

/* 
    JSX элементы мы можем возращать в виде разметки, 
    как результат работы с массивом.
    Пример ниже.
*/

const data = [
  {
    title: 'Alexa',
    twiter: '@alexa99',
    img: alexaImage,
    text: "Alexa was created by Amazon and helps you buy things"
  },
  {
    title: 'Cortana',
    twiter: '@cortana32',
    img: cortanaImage,
    text: "Cortana was made by Microsoft. Who know what it does?"
  },
  {
    title: 'Siri',
    twiter: '@siri01',
    img: siriImage,
    text: "Siri was made by Apple and is being phased out"
  }
]

const App = () => {
  return (
    <div className="container">
      <section className="hero is-primary" >
        <div className="container hero-body">
          <p className="title">
            Personal Digital Assistants
          </p>
        </div>
      </section >
      <div>

        <section className="section">
          <div className="columns">
            {data.map(({ title, twiter, img, text }) => {
              return <ProfileCard key={title} title={title} twiter={twiter} img={img} text={text} />
            })}
          </div>
        </section>
      </div>
    </div>

  );
}

export default App;
