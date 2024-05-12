const apiUrl = import.meta.env.VITE_CATALOG
// VITE_CATALOG=http://localhost:7070/api/items

export const fetchProduct = async (id: string) => {

     const response = await fetch(`${apiUrl}/${id}`);
     const data = await response.json();

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  
    return await data;
  };
