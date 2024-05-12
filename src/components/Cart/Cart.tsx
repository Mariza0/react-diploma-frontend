import { MouseEventHandler, useEffect, useState } from "react";
import { Order } from "../Order"
import { useNavigate } from "react-router-dom";

export const Cart = () => {

    const [storedCartItems, setStoredCartItems] = useState<any[]>([]);

    useEffect(() => {
      if (localStorage.length == 0) {
        setStoredCartItems([])
      }
    },[localStorage.length]);

    useEffect(() => {
      const cartData = localStorage.getItem('cart');

      if (cartData !== null && cartData !== 'undefined') {
        setStoredCartItems(JSON.parse(cartData));
      }

    },[localStorage.totalQuantity]);

    const navigate = useNavigate();
      // Удаляем продукты с определенными id из cartItems
    const handleDeleteItem: MouseEventHandler<HTMLButtonElement> = (e) => {
        
      const idToDelete = parseInt(e.currentTarget.dataset.itemId || ''); 
      const updatesItems = storedCartItems.filter((item: any) => item.id !== idToDelete);
      const totalQuantity = updatesItems.reduce((total, item) => total + item.quantity, 0);

      setStoredCartItems(updatesItems);
        
      // перезаписываем в localstorage
      localStorage.setItem('cart', JSON.stringify(updatesItems));
      localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
      // обновляем страницу
      navigate(`/cart.html`);

    }
   
   return (
<>
    {storedCartItems.length == 0 &&
        <section className="cart">
             <h2 className="text-center">Корзина пуста</h2>
        </section>

    }

{ storedCartItems.length > 0 &&
<>
    <section className="cart">
    <h2 className="text-center">Корзина</h2>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название</th>
          <th scope="col">Размер</th>
          <th scope="col">Кол-во</th>
          <th scope="col">Стоимость</th>
          <th scope="col">Итого</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tbody>
       {storedCartItems.map((item: any, index: number) => (
        
        <tr key={index + 1}>
          <td scope="row">{index + 1}</td>
          <td><a href={`/catalog/${item.id}.html`}>{item.title}</a></td>
          <td>
          <span>
          {item.selectedSize}
          </span>
      
          </td>  
          <td>{item.quantity}</td>
          <td>{item.price} руб.</td>
          <td>{Number(item.price)*Number(item.quantity)} руб.</td>
          <td><button className="btn btn-outline-danger btn-sm" data-item-id={item.id} onClick={handleDeleteItem}>Удалить</button></td>
        </tr>
      ))}
       <tr>
          <td colSpan={5} className="text-right">Общая стоимость</td>
          <td>{storedCartItems.reduce((total, item) => total + item.price, 0)} руб.</td>
        </tr>
      </tbody>
    
    </table>

  </section>

< Order items={storedCartItems} />

          </>
       }
    </>
   )
};
