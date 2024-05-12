const apiUrl = import.meta.env.VITE_ORDER
// http://localhost:7070/api/order

interface interfaceOrder {
    owner: {
        phone: string,
        address: string
    },
    items: [
        {
          id: string,
          price: string,
          count: string
        }
      ]    
  }

  export const fetchOrder = async (orderData: interfaceOrder): Promise<boolean> => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        if (response.ok) {
            if (response.status === 204) {
                alert('Ваш заказ успешно отправлен.');
            }
            return true; // Заказ успешно отправлен
        } else {
            throw new Error(response.statusText); // Генерируем ошибку для catch блока
        }
    } catch(error) {
        alert('Произошла ошибка. Попробуйте отправить заказ повторно.');
        return false; // Ошибка при отправке заказа
    }
};
