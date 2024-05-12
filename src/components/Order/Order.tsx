import { ChangeEventHandler, useState } from "react"
import { itemInterface } from "../../../interfaces/Item"
import { fetchOrder } from "../../api/fetchOrder"
import { useNavigate } from "react-router-dom";

export const Order = ({ items }: { items: any }) => {

    const [name, setName ] = useState('');
    const [number, setNumber] = useState('')
    const [checkBox, setCheckBox] = useState(false)

    const navigate = useNavigate();

    const changeName: ChangeEventHandler<HTMLInputElement> = (e) => setName(e.target.value)

    const changeNumber: ChangeEventHandler<HTMLInputElement> = (e) => setNumber(e.target.value)

    const changeCheckBox: ChangeEventHandler<HTMLInputElement> = () => setCheckBox((!checkBox))

    // проверка корректности номера 
    const checkNumber = (phoneNumber: string): boolean => {
        const phoneRegex = /^(?:\+7|8)\d{10,}$/;
       
        return phoneRegex.test(phoneNumber);
    }

   const sendContacts: React.FormEventHandler = (e) => {
    e.preventDefault()

    // Проверка номера и имени
    if (!checkNumber(number) || name.trim() === '') {
      alert("Пожалуйста, введите корректный номер телефона и имя");
      return;
    };

    // Получаем значение из состояния
    const phone = number;
    const address = name;

    // группируем товары с одним id и размером
    const groupedItems = items.reduce((acc: any, curr: any) => {

      const existingItem = acc.find(({item} : {item: itemInterface }) => 
      item && item.id === curr.id && item.selectedSize === curr.selectedSize);

      if (existingItem) {
        existingItem.count += 1;
      } else {
        acc.push({ id: curr.id, price: curr.price, count: 1 });
      }
      return acc;
    }, []);

    const orderData = {
      owner: {
        phone: phone,
        address: address
      },
      items: groupedItems
    };

    // отправка заказа на сервер
    fetchOrder(orderData)
    .then(result => {
      if (result) {
        // обнуляем localstorage при успешной отправке
        localStorage.clear();
        setName('')
        setNumber('')
        setCheckBox(false); // Сброс состояния чекбокса
        // обновляем страницу
        navigate("/cart.html")
      }
    })
    .catch(error => {
      console.error(error); // Выведет ошибку, если промис был отклонен
    });
  }

  return (
    <>
      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
          <div className="card" style={{ maxWidth: '30rem', margin: '0 auto', }}>
            <form className="card-body" onSubmit={sendContacts}>
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input className="form-control" id="phone" placeholder="Ваш телефон"
                  value={number} 
                  onChange={changeNumber} required/>
              </div>
              <div className="form-group">
                <label htmlFor="address">Адрес доставки</label>
                <input className="form-control" id="address" 
                  value={name}
                  placeholder="Адрес доставки" 
                  required onChange={changeName}/>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" 
                  id="agreement" checked={checkBox} required
                  onChange={changeCheckBox}
                />
                <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
              </div>
              <button type="submit" className="btn btn-outline-secondary" >Оформить</button>
            </form>
          </div>
        </section>
      </>
    )
};
