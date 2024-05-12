import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { categoriesChange, categoriesSucces } from "../../actions/categoriesCreators";
import { catalogCategoriesChange } from "../../actions/catalogCreators";
import { offsetCategoriesChange } from "../../actions/offsetCreators";
import { searchRequest } from "../../actions/searchCretors"

export const Categories = () => {

  const { items, error } = useSelector(
    (state: any) => state.categories
  );
  const { countOffset, search } = useSelector(
    (state: any) => state.search
  );

  const { category } = useSelector(
      (state: any) => state.categories
  );

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(categoriesSucces(items));
  }, [dispatch]);

  const handleCategory = (e: React.MouseEvent<HTMLAnchorElement>, categoryId: string) => {
    e.preventDefault()

    // обновляем категорию текущую
      if (categoryId === category) {
        console.log('return de handle category')
        return;
      }

      if (e.target) {
      // запрос заполнения каталога с новой категорией
      dispatch(searchRequest(categoryId, countOffset, search));

        dispatch(categoriesChange(categoryId));

        // установка новой категории
        dispatch(catalogCategoriesChange(categoryId));

        // обнуляем список offset
        dispatch(offsetCategoriesChange(categoryId));

    if (error) {
        return <div>Error occurred: {error}</div>;
    }
  }
}

  return (
    
      (!items || !(items.length > 0)) ?
        
        (
            <div className="preloader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>    
      ) :    
    (
    
    <ul className="catalog-categories nav justify-content-center">

        <li key='0' className="nav-item">
             <a className={`nav-link ${category == '0' ? 'active' : ''}`} href="#" 
             onClick={(e) => handleCategory(e,'0')} >Все</a>
       </li>
         {items.map((item: any) => (
        <li key={item.id} className="nav-item">
            <a className={`nav-link ${category === item.id ? 'active' : ''}`} href="#" 
            onClick={(e) => handleCategory(e,item.id)}>{item.title}</a>
        </li>
         ))}
    </ul>
    
  )
  )
};
