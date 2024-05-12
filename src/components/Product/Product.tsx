import { useDispatch, useSelector } from "react-redux";
import { productRequest } from "../../actions/productCreators";
import { MouseEventHandler, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { itemInterface } from "../../../interfaces/Item";

export const Product = () => {

    const [selectedSize, setSelectedSize] = useState<string>('');
    const [condition, setCondition] = useState(true);

    const { id } = useParams();

    const { item, loading, error } = useSelector(
        (state: any) => state.product
    );

    const [showData, setShowData] = useState(false);
      
    const dispatch = useDispatch();

    // обновляем товар при изменении id товара
    useEffect(() => {
        dispatch(productRequest(id));
      }, [dispatch, id]);

    useEffect(() => {
        setShowData(true);
    }, [item]);

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const navigate = useNavigate();

    // добавление товара в корзину
    const addToCartButton = () => {     

        const existingCartData = localStorage.getItem('cart');

        const selected = (selectedSize) ? selectedSize : document.querySelector('.selected')?.textContent ?? '';

        const newItem = {
            ...item, 
            quantity: quantity, // Добавляем количество товара в объект
            selectedSize: selected,
        };

        // если в корзине уже есть товар
        if ( existingCartData !== null) {
            // Если список товаров уже есть в localStorage, парсим его
            const existingCart = JSON.parse(existingCartData);
             
            if (  existingCart.length > 0) {
     
            // берем текущее значение общего количества товаров
            const totalQuantity = localStorage.getItem('totalQuantity')
            
            const newTotalQuantity = Number(totalQuantity) + Number(newItem.quantity)
            // переписываем это значение в локал сторадж
            localStorage.setItem('totalQuantity', JSON.stringify(newTotalQuantity));

            // Добавляем новый товар к текущему списку товаров
            const updatedCart = [...existingCart, newItem];


            const mergedCartData = updatedCart.reduce((accumulator, currentItem) => {
                // Поиск элемента в аккумуляторе с таким же id и selectedSize
                const existingItem = accumulator.find((item: itemInterface) => item.id === currentItem.id && item.selectedSize === currentItem.selectedSize);
                
                if (existingItem) {
                    // Если элемент уже есть в аккумуляторе, увеличиваем его количество
                    existingItem.quantity += currentItem.quantity;
                } else {
                    // Если элемент не найден, добавляем его в аккумулятор
                    accumulator.push({ ...currentItem });
                }   
                return accumulator;
            }, []);
            
            // Сохраняем обновленный список товаров в localStorage
            localStorage.setItem('cart', JSON.stringify(mergedCartData));
            } 

        if (existingCart.length == 0 ) {
            localStorage.setItem('cart', JSON.stringify([newItem]));
    
            // добавляем значение общего количества
            localStorage.setItem('totalQuantity', JSON.stringify(newItem.quantity));

        }
    
    // если у корзине еще нет товара
    } else {
        localStorage.setItem('cart', JSON.stringify([newItem]));
    
        // добавляем значение общего количества
        localStorage.setItem('totalQuantity', JSON.stringify(newItem.quantity));

    }
        // обновляе страницу
        navigate(`/cart.html`);
        
    }

    const handleSize: MouseEventHandler<HTMLSpanElement> = (e) => {

        const el = e.target as HTMLSpanElement;
        el.classList.toggle('selected');
        el.textContent? setSelectedSize(el.textContent) : ''
       
        // делаем кнопку в корзину неактивной если размер не выбран
        el.classList.contains('selected') ? setCondition(false) : setCondition(true)
    }

    if (error) {

        return <div>Error occurred: {error.message}</div>;
    }

    return (
        <>
        {loading == true && showData == false &&
            <div className="preloader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>  
        }

        { loading == false && showData == true &&
            <section className="catalog-item">
                <h2 className="text-center">{item.title}</h2>
                    <div className="row">
                        <div className="col-5">
                            <img src={item.images[0]}
                            className="img-fluid" alt=""/>
                        </div>
                    <div className="col-7">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>{item.sku}</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>{item.manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>{item.color}</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>{item.material}</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>{item.season}</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>{item.reason}</td>
                            </tr>
                        </tbody>
                    </table>
                <div className="text-center">
                    <p>Размеры в наличии:
                    {item.sizes && item.sizes
                    .filter((size: any) => size.available)
                    .map((size: any) => (
                    <span
                        key={size.size}
                        className= "catalog-item-size"
                        onClick={handleSize}
                        style={{ cursor: 'pointer' }}
                    >
                        {size.size}
                    </span>
                    ))
}
                    </p>
                    <p>Количество: <span className="btn-group btn-group-sm pl-2">
                        <button className="btn btn-secondary" onClick={handleDecrement}>-</button>
                            <span className="btn btn-outline-primary">{quantity}</span>
                                <button className="btn btn-secondary" onClick={handleIncrement}>+</button>
                            </span>
                        </p>
                    </div>
                    <button className="btn btn-danger btn-block btn-lg" disabled={condition} onClick={addToCartButton}>В корзину</button>
                </div>
            </div>
        </section>
        }
    </>
    )
};
