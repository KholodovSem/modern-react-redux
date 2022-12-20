import className from 'classnames';

/* 
    What CSS-rules we need?

    *Border:
    1) Border-width (common)
    2) Border-color

    *Padding
    1) Padding (common)
    2) Background-color 

    *Text
    1) Text color 
*/



const Button = ({ children, primary, secondary, success, warning, danger, rounded, outline, ...rest }) => {

  /* 
    * Props ===> ...rest
    Паттерн распыления второстепенных пропсов.
    Вместо того, чтобы описывать кейсы для разных слушателей событий (в нашем конерктном случае).
    Мы говорим что, любой разработчик, может установить любой случатель на своё усмотрение.
    В конечном счёте - это будет выглядеть так:
  
    <App>
      <Button primary outline onClick={fn()} onMouseEnter={fn()}>Click Me!</Button>
      Всё что следует после ожидаемых пропсов, мы собираем с помощью спреда.
      А потом на самом HTML-элементе кнопки с помозью реста распыляем.
    </App>
  */

  /*
      * classnames (lib)
      Наша задача в этом модуле состояла в том, чтобы создать компонент кнопки,
      который ведёт себя как обычная HTML-кнопка, а значит, может принимать
      пользовательские стили (специфичные стили), слушатели событий и т.д.
      При этом мы хотим ограничить выбор базовых стилей.
      Выбрать его можно указав соответсвующий пропс, который будет передаваться
      этому компоненту.
      Чтобы решить задачу динамических стилей, мы использовали библиотеку
      "classnames".
      В базововом виде, она делает следующее:

      const dynamicStyles = className(arg1, arg2, arg3);
      Все переданные ей аргуенты будут переведенны в строки, между
      ними будут выставленны пробелы, так как это приемлимый вид для
      атрибута "className".
      Если значение одного из атрибутов будет null | undefined,
      он будет проигнорирован.

      В более сложной вариации, функция может принимать объект,
      ключем которого будет строка, которая будет встравлена в 
      итоговую строку, только если её значение "true".

      "border-blue-500 bg-blue-500": true - будет вставлена
      "border-gray-900 bg-gray-900": false - не будет вставлена

      Так же мы принимаем остаточные аргументы, одним из которых
      могут быть специфичные для кнопки стили, по типу отсупов.
      Мы просто указываем такой вариант, как возможный в виде аргумента.
      Если он будет, он будет пришит к строке, если нет, то проигнорирован.
  */
  const styleForButton = className(rest.className, "px-3 py-1.5 border text-white flex gap-1 items-center", {
    "border-blue-500 bg-blue-500": primary,
    "border-gray-900 bg-gray-900": secondary,
    "border-green-500 bg-green-500": success,
    "border-yellow-400 bg-yellow-400": warning,
    "border-red-500 bg-red-500": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-900": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-400": outline && warning,
    "text-red-500": outline && danger,
  })

  return <button className={styleForButton} {...rest}>{children}</button>
};

/* 
    PropTypes - библиотека, для проверки поступющих пропсов на тип и другие
    требования.

    В нашем случае, мы написали пользовательскую валидацию, на наличие только
    одного вида вариации кнопки, чтобы не было конфликтов стилей.
    Перевели возможные значения в буль, сложили и установили проверку.
*/

Button.propTypes = {
  variationValidation: ({ primary, secondary, success, warning, danger }) => {
    const variationCount = !!primary +
      !!secondary +
      !!success +
      !!warning +
      !!danger

    if (variationCount > 1) {
      return new Error("Variation will be can only one")
    }
  }
}

export default Button;