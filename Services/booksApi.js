const BASE_URL = "https://gutendex.com/books";
export const getBooks = async()=>{
const res = await fetch(BASE_URL);
const data = await res.json();
return data.results;
};


export const searchBooks = async(query) => {
    const res = await fetch (`${BASE_URL}?search=${encodeURIComponent(query)}`);
    const data = await res.json();
    return data.results;
};


export const getCatigory = async (category) => {
    const res = await fetch (`${BASE_URL}?topic=${category}`);
    const data = await res.json();
    return data.results;
};
