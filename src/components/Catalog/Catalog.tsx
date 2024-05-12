import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { catalogSucces } from "../../actions/catalogCreators";
import { searchRequest } from "../../actions/searchCretors";
import { Item } from "../Item";

export const Catalog = () => {

    const { items, category, error } = useSelector(
        (state: any) => state.catalog
      );

      const { countOffset, search } = useSelector(
        (state: any) => state.search
      );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(catalogSucces(items));
    }, [dispatch, items]);

    useEffect(() => {
      dispatch(searchRequest(category, countOffset, search));
  }, [category, countOffset, search]);

    if (error) {
        return <div>Error occurred: {error.message}</div>;
    }

  return (
    
      (!items ) ?
        
        (

            <div className="preloader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>    
        
      ) :
      (

        <div className="row">
 
          {items.map((item: any) => <Item key={item.id} item={item}/> )}
     
        </div>
     
      ) 
  )
};
