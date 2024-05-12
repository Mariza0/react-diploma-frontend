import { Nav } from "../Nav";
import { Logo } from "../Logo"
import { SearchNav } from "../SearchNav";

export const Header = () => {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Logo />
      <Nav isVertical={false}/> 
      < SearchNav />
          </nav>
        </div>
      </div>
    </header>
  );
};
