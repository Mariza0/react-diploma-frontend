import { TopSales } from "../../components/TopSales/TopSales";
import { Catalog } from "../../components/Catalog/Catalog";
import { Categories } from "../../components/Categories/Categories";
import { Offset } from "../../components/Offset/Offset";

export const Home = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
              < TopSales />
              <section className="catalog">
                <h2 className="text-center">Каталог</h2>
              < Categories/>
              < Catalog />
              < Offset />
              </section>      
          </div>
        </div>
      </div>
    );
  };
