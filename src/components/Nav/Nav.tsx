import { NavLink } from "react-router-dom";

export const Nav = ({isVertical} : { isVertical: boolean }) => {

  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : "";

  return (
<>
    {!isVertical && (
      <div className="collapse navbar-collapse" id="navbarMain">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className={`nav-link ${active}`} to="/">
              Главная
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${active}`} to="/about.html">
              О магазине
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${active}`} to="/catalog.html">
              Каталог
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${active}`} to="/contacts.html">
              Контакты
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }

{isVertical && (
  <div className="col">
    <section>
      <h5>Информация</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className={`nav-link ${active}`} to="/about.html">
              О магазине
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${active}`} to="/catalog.html">
              Каталог
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${active}`} to="/contacts.html">
              Контакты
            </NavLink>
          </li>
      </ul>
    </section>
  </div>
  )
}
</>
)};
