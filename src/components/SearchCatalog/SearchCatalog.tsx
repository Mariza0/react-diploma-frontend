import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchRequest } from "../../actions/searchCretors";

export const SearchCatalog = () => {

  const dispatch = useDispatch();

  const { error, countOffset, search } = useSelector(
    (state: any) => state.search
  );

  const { items, category, loading } = useSelector(
    (state: any) => state.catalog
  );
  
  const [formData, setFormData] = useState({
     searchText: '',
  });

  useEffect(() => {
    if (search) {
      setFormData({ searchText: search });
    }
  }, [search]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
       
    dispatch(searchRequest(category, countOffset, formData.searchText))
        
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      
    const { value } = e.target;

    setFormData({ searchText: value });
        
  };

return (
  <>
    {error ? (
        <div>{error}</div>
      ) : (
        <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
              <input className="form-control" name="search" 
              value={formData.searchText} placeholder="Поиск" onChange={handleChange}/>      
        </form>
      )}

    {
      items.length == 0 && loading == false &&
        <div>
            <h1>
                Ничего не найдено
            </h1>     
        </div>
      }
</>
)};
