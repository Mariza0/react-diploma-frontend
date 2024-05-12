import { useNavigate, Link } from "react-router-dom";
// import "./notfound.css";
import { Banner } from "../../components/Banner/Banner";

export const NotFound = () => {

  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Страница не найдена</h2>
          <Link className="notFound__btn" to="/">
            <h2>Home</h2>
          </Link>
        </section>
    </>
  );
};
