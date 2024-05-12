const apiUrl = import.meta.env.VITE_SEARCH

export const fetchSearch = async (search: string) => {
    const params = new URLSearchParams({ q: search });
  
    const response = await fetch(`${apiUrl}${params}`);

    if (!response.ok) {

      throw new Error(response.statusText);

    }
    
    return await response.json();
  };
  