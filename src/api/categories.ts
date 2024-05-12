const apiUrl = import.meta.env.VITE_CATEGORIES

export const fetchCategories = async () => {

    const response = await fetch(apiUrl)
   
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
  
    return await data;
  };
