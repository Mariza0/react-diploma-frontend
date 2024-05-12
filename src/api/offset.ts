const apiUrl = import.meta.env.VITE_OFFSET
// VITE_OFFSET=http://localhost:7070/api/items?offset=

export const fetchOffset = async (countOffset: any) => {

     const response = await fetch(`${apiUrl}${countOffset}`);
     const data = await response.json();
  
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  
    return await data;
};

const apiUrlCategory = import.meta.env.VITE_CATALOG

export const fetchOffsetCategory = async (category: string, countOffset: any) => {

    const url = `${apiUrlCategory}?categoryId=${category}&offset=${countOffset}`;

    const response = await fetch(url); 

    const data = await response.json();
 
   if (!response.ok) {
     throw new Error(response.statusText);
   }
 
   return await data;
};
