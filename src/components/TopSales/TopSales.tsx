import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { topSalesSucces } from "../../actions/topSalesCreators";
import { Item } from "../Item"

export const TopSales = () => {

    const { items, error } = useSelector(
        (state: any) => state.topSales
      );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(topSalesSucces(items));
    }, []);

    if (error) {
        console.log(error,'error')
        return <div>Error occurred: {error.message}</div>;
    };
  
    return (

      (!items || !(items.length > 0) ? 
        
        (
            <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="preloader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul>   
            </ul>     
          </section>
       
      ) : 
      
      (

    <section className="top-sales">
    <h2 className="text-center">Хиты продаж!</h2>
      <div className="row">
        {items.map((item: any) => <Item key={item.id} item={item} />)}
      </div>         
    </section>
      )
    )
  )
};
