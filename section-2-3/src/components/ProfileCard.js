/* 
    *Props system
    Процесс передачи параметров от родительского компонента к дочернему.

    *Основные тезисы:
    1)Pass data from a perent to a child
    2)Allows a parent to configure each child differently
    3)One way flow of data. Child can't push props back up

    *Communication with props
    1)Add attributes to a JSX element
    function App() {
      return (
        <Child someText="" or {} /> (1)
      )
    }
    2)React collect attributes and puts them in an object
    function Child(props - it's the object (2)){
      return ...
    }
    3)Props object always as the first argument in child component
    4)We use the props however we wish
*/

const ProfileCard = ({ img, title, twiter, text }) => {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={img} alt="Just logo" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{twiter}</p>
          </div>
          <div className="content">{text}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;