import Link from "./Link";

/* 
    *React Hard-Code Implement Navigation (using clear JS).
    
    windows.location - объект с настройками, в котором находится информация о том,
    где находится пользователь.

    windows.history.pushState() - метод, обновляющий адрес поисковой строки.
    Позволяет пользоваться кнопками "Назад" и "Вперёд".
*/

const SideBar = () => {
  const links = [
    {
      label: 'Dropdown',
      path: '/'
    },
    {
      label: 'Accordion',
      path: '/accordion'
    },
    {
      label: 'Button',
      path: '/button'
    },
    {
      label: 'Modal',
      path: '/modal'
    }
  ];

  const mapContent = links.map(({ label, path }) =>
    <Link
      className="mb-3"
      activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      key={label}
      to={path}
    >
      {label}
    </Link>);

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {mapContent}
    </div>)
}

export default SideBar;