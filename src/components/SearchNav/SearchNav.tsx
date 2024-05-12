import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchHeader } from "../../actions/searchCretors";


export const SearchNav = () => { 
  
  const dispatch = useDispatch();

  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {

    const storageQuantity = localStorage.getItem('totalQuantity');
      if (storageQuantity) {

        const totalQuantity = JSON.parse(storageQuantity);
        setCartQuantity(Number(totalQuantity));

      } else {

        setCartQuantity(0);

      };
  },[localStorage.totalQuantity]);

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    searchText: '',
  });

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ searchText: value });
      
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
  };

  const handleSearchToggle: React.MouseEventHandler<HTMLDivElement>  = () => {
  
        if (isSearchVisible && formData.searchText.trim() !== '') {
        dispatch(searchHeader(formData.searchText));
        navigate('/catalog.html');
        
        setFormData({ searchText: '' });
        setIsSearchVisible(false);
        
      } else {
        setIsSearchVisible((prevState) => !prevState);
      }
  };

  useEffect(() => {
    if (formData.searchText.trim() !== '') {
  
      setFormData({ searchText: '' });
       
    }
  }, [ navigate]);

  const handleCart = () => {
    navigate(`/cart.html`);
  };

  return (
   <>
      <div className="header-controls-pics">
        <form data-id="search-form" className={`header-controls-search-form form-inline ${
            isSearchVisible ? "" : "invisible"
          }`} onSubmit={handleSubmit}>
                    <input className="form-control" name="searchText" value={formData.searchText} placeholder="Поиск" onChange={handleSearchText}/>
                </form>

            <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={handleSearchToggle}></div>
               
            <div className="header-controls-pic header-controls-cart" onClick={handleCart}>
               
              {Number(cartQuantity) > 0 &&
                <>
                  <div className="header-controls-cart-full">{cartQuantity}</div>
          
                  <div className="header-controls-cart-menu"></div>
                   </>
              } 
            </div>
      </div >
   </>
  )
};
