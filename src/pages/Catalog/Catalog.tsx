import { Catalog } from "../../components/Catalog/Catalog";
import { Categories } from "../../components/Categories/Categories";
import { Offset } from "../../components/Offset";
import { SearchCatalog } from "../../components/SearchCatalog";

export const CatalogPage = () => {
    return (
         <section className="catalog">
          <h2 className="text-center">Каталог</h2>
            <Categories/>
            <SearchCatalog/>
            <div className="row">
              <Catalog/>
              <Offset/>
            </div>
         </section>
    )
};
