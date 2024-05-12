import { useDispatch, useSelector } from "react-redux";
import { offsetRequest } from "../../actions/offsetCreators";
import { useEffect, useState } from "react";
import { Item } from "../Item";

export const Offset = () => {

  const dispatch = useDispatch();

  const [showData, setShowData] = useState(false);

  const { offset, loading, error, countOffset } = useSelector(
    (state: any) => state.offset
  );

  const { items } = useSelector(
    (state: any) => state.catalog
  );

  const { search } = useSelector(
    (state: any) => state.search
  );

  const { category } = useSelector(
    (state: any) => state.catalog
  );

  const [newOffset, setNewOffset] = useState(offset);
      
  useEffect(() => {
    if (offset.length > 0) {
      setNewOffset([...newOffset, ...offset]);
    }
  }, [offset]);

  // При смене категории обнуляется массив
  useEffect(() => {
      setNewOffset([]); 
  }, [category]);

  useEffect(() => {
      setNewOffset([]);
  }, [search]);

    useEffect(() => {
      setShowData(false);
  }, [category]);

  useEffect(() => {
    setShowData(false);
}, [search]); 

  const handleOffset = () => {

    dispatch(offsetRequest(category, countOffset, search));
       
    setShowData(true);
  };
    
  if (error) {

    return <div>Error occurred: {error.message}</div>;

  };
    
  return (

    <>
    { items.length == 0 &&
      <>
      </>
    }

    {!showData && items.length > 0 &&
      <div className="text-center">
        <button className="btn btn-outline-primary" onClick={handleOffset}>Загрузить ещё</button>
      </div>
    }

    {showData && !loading &&
      <div className="preloader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>  
    }
  
    {showData && loading && newOffset && offset.length == 6 &&

      <>
        <div className="row">
          {newOffset.map((item: any) => <Item key={item.id} item={item} />)}
        </div>
        <div className="text-center">
            <button className="btn btn-outline-primary" onClick={handleOffset}>Загрузить ещё</button>
        </div>
      </>
    }

{showData && newOffset && loading && (offset && offset.length < 6) &&

  <div className="row">
    {newOffset.map((item: any) => <Item key={item.id} item={item}/>)}
  </div>
}

</>
)};
