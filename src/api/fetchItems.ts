const apiUrl = import.meta.env.VITE_CATALOG
// VITE_CATALOG=http://localhost:7070/api/items

export const fetchItems = async (category: any, countOffset: string, search: string) => {

    const params = new URLSearchParams();
    if (category) {
        params.append('categoryId', category);
    }
    if (countOffset) {
        params.append('offset', countOffset);
    }
    if (search) {
        params.append('q', search);
    }

     const response = await fetch(`${apiUrl}?${params}`);
     const data = await response.json();

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  
    return await data;
  };
