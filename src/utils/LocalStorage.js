
export const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  export const loadFromLocalStorage = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : []; 
    } catch (error) {
        console.error("Error loading from LocalStorage:", error);
        localStorage.removeItem(key); 
        return []; 
    }
};


  