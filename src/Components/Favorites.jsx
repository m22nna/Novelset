// import { useEffect,useState } from "react";
// import { supabase } from "../../supabaseClient";

// export default function Favorites(){

// const [favorites,setFavorites] = useState([]);

// const loadFavorites = async()=>{

// const { data:user } = await supabase.auth.getUser();

// const { data } = await supabase
// .from("favorites")
// .select("*")
// .eq("user_id",user.user.id);

// setFavorites(data);
// }

// useEffect(()=>{
// loadFavorites();
// },[])

// return(
// <div className="flex gap-4 flex-wrap">

// {favorites.map(book=>(
// <div key={book.id}>

// <img src={book.cover}/>

// <h3>{book.title}</h3>

// </div>
// ))}

// </div>
// )

// }

// import { useEffect, useState } from "react";
// import { supabase } from "../../supabaseClient";

// export default function Favorites() {
//   const [favorites, setFavorites] = useState([]);

//   const loadFavorites = async () => {
//     // جلب المستخدم الحالي
//     const { data, error: userError } = await supabase.auth.getUser();
//     if (userError) {
//       console.error("Error fetching user:", userError);
//       return;
//     }

//     const user = data.user;
//     if (!user) {
//       console.log("No user logged in");
//       return;
//     }

//     // جلب المفضلات
//     const { data: favs, error } = await supabase
//       .from("favorites")
//       .select("*")
//       .eq("user_id", user.id);

//     if (error) {
//       console.error("Error fetching favorites:", error);
//       setFavorites([]); // fallback
//     } else {
//       setFavorites(favs || []); // تأكد إنها array
//     }
//   };

//   useEffect(() => {
//     loadFavorites();
//   }, []);

//   return (
//     <div className="flex gap-4 flex-wrap">
//       {favorites.length === 0 ? (
//         <p className="text-center w-full">No favorites yet</p>
//       ) : (
//         favorites.map((book) => (
//           <div key={book.id} className="border p-2 rounded">
//             <img src={book.cover} alt={book.title} className="w-32 h-48 object-cover mb-2" />
//             <h3 className="text-lg font-semibold">{book.title}</h3>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { supabase } from "../../supabaseClient";

export default function Favorites() {
  const { hiddenFavorites, setHiddenFavorites } = useOutletContext();
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = async () => {
    // جلب المستخدم الحالي
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError) {
      console.error("Error fetching user:", userError);
      return;
    }

    if (!user) {
      console.log("No user logged in");
      setFavorites([]);
      return;
    }

    // جلب المفضلات الخاصة بالمستخدم
    const { data: favs, error } = await supabase
      .from("favorites")
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      console.error("Error fetching favorites:", error);
      setFavorites([]);
    } else {
      // فلترة المفضلات لإخفاء الكتب التي تم حذفها من الواجهة سابقاً
      const visibleFavs = (favs || []).filter(
        (book) => !hiddenFavorites.includes(book.id)
      );
      setFavorites(visibleFavs);
    }
  };

  const removeFromFavorites = (id) => {
    // يضيف الـ ID الخاص بالكتاب إلى قائمة الكتب المخفية
    setHiddenFavorites((prev) => [...prev, id]);
    // ويحذفه من العرض الحالي
    setFavorites(favorites.filter((book) => book.id !== id));
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {favorites.length === 0 ? (
        <p className="text-center w-full text-inherit my-16 font-bold">No favorites yet !</p>
      ) : (
        favorites.map((book) => (
          <div key={book.id} className="border p-2 rounded w-40 flex flex-col justify-between relative">
            <div>
              <img
                src={book.cover || "https://placehold.co/200x300?text=No+Cover"}
                alt={book.title}
                className="w-full h-56 object-cover mb-2 rounded"
              />
              <h3 className="text-sm font-semibold text-center mb-8">{book.title}</h3>
            </div>
            <button 
              onClick={() => removeFromFavorites(book.id)}
              className="absolute bottom-2 left-2 right-2 text-inherit rounded p-1 text-sm font-semibold transition-colors flex items-center justify-center gap-1" style={{backgroundColor:"var(--main_bg)"}}
            >
              <i className="fa-solid fa-trash-can"></i> Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}