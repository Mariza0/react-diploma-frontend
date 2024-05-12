import React from 'react';
import { itemInterface } from '../../../interfaces/Item'
import { useNavigate } from 'react-router-dom';

export const Item: React.FC<({item: itemInterface})> = ({item}) => {

  const navigate = useNavigate();
  
  const handleProduct = () => {
 
    navigate(`/catalog/${item.id}.html`);

  }

  return (
    <div key={item.id} className="col-4">
      <div className="card">
        <img src={item.images[0]} className="card-img-top img-fluid" alt={item.title} />
        <div className="card-body">
          <p className="card-text">{item.title}</p>
          <p className="card-text">{item.price}</p>
          <a href="#" className="btn btn-outline-primary"  onClick={handleProduct}>Заказать</a>
        </div>
      </div>
    </div>
  );
};
