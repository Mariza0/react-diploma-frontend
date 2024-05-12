const apiUrl = import.meta.env.VITE_CATALOG
// VITE_CATALOG=http://localhost:7070/api/items

export const fetchCatalog = async (category: any) => {

     const response = (category && category !== 0) ? 
     (await fetch(`${apiUrl}?categoryId=${category}`)) : await fetch(apiUrl);
     const data = await response.json();
  
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  
    return await data;
  };
