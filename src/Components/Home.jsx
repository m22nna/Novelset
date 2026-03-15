import { useEffect, useState, useRef } from "react";
import { useNavigate, useOutletContext, useSearchParams } from "react-router-dom";
import main_photo from "../assets/592f4f64abfbf014af6ec082761d8940.jpg";
import main_photo_1 from "../assets/55ecc8bf3b37aca1b256fdc529e2e0e2.jpg";
import main_photo_2 from "../assets/8bc83dcf78a697045c0b92308cefaa1c.jpg";
import BookCard from "./BookCard.jsx";
import { getBooks, searchBooks } from "../../Services/booksApi.js";
import { supabase } from "../../supabaseClient.js";
import toast from "react-hot-toast";
export default function Home() {

  const { isLogged, books, setBooks, isLoadingBooks, setIsLoadingBooks, search, setSearch } = useOutletContext();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const slides = [main_photo, main_photo_1, main_photo_2];
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
  setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Ref لمراقبة حالة البحث المطلوبة فعلياً حتى لا تتداخل مع جلب الكتب الافتراضية
  const lastSearchedRef = useRef("");

//الجزء الخاص بالكتب
useEffect(()=>{
  const q = searchParams.get("q");
  if (q) {
    if (q !== lastSearchedRef.current || books.length === 0) {
      setSearch(q);
      lastSearchedRef.current = q;
      setIsLoadingBooks(true);
      searchBooks(q)
        .then((data) => {
          if (lastSearchedRef.current === q) setBooks(data);
        })
        .catch((error) => {
          console.error("Search failed", error);
          if (lastSearchedRef.current === q) setBooks([]);
        })
        .finally(() => {
          if (lastSearchedRef.current === q) setIsLoadingBooks(false);
        });
    }
  } else {
    if (books.length === 0 || lastSearchedRef.current.trim() !== "") {
      setSearch("");
      lastSearchedRef.current = "";
      loadBooks();
    }
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[searchParams])

const loadBooks = async ()=>{
  try {
    setIsLoadingBooks(true);
    const data = await getBooks();
    // تأكد من أن المستخدم لم يقم بعملية بحث أثناء جلب البيانات
    if (lastSearchedRef.current.trim() === "") {
      setBooks(data.slice(0,40));
    }
  } catch (error) {
    console.error("Failed to load books from API", error);
    if (lastSearchedRef.current.trim() === "") setBooks([]);
  } finally {
    setIsLoadingBooks(false);
  }
};
//الجزء الخاص بالبحث عن الروايات  
const handelSearch = ()=>{
  if (!search.trim()) {
    setSearchParams({});
  } else {
    setSearchParams({ q: search.trim() });
  }
};


//الجزء الخاص بالمفضلات
  const addFavorite = async(book)=>{
    const { data } = await supabase.auth.getUser();
    
    if (!data.user) {
      toast.error("Please login to add favorites.");
      return;
    }

    await supabase.from("favorites").insert([{
      user_id: data.user.id,
      book_id: book.id,
      title: book.title,
      cover: book.formats?.["image/jpeg"] || "default-cover.jpg"
    }]);
    toast.success("added to favorites");
  }
return (
    <>
      <div className="w-full p-6 flex flex-wrap mt-5 rounded-lg "style={{backgroundColor:"var(--main_bg)"}}>
        {/* Left */}
        <div className="w-full md:w-1/2 mb-1">
          <div className="mt-10">
            <h5 className="text-2xl font-semibold tracking-tight text-heading italic mb-2">
              Discover Your Next Favorite Story.
            </h5>
            <p className="text-xl italic mb-6">
              Step into a world of captivating stories. Browse our extensive
              collection of novels, find your next favorite read, and enjoy a
              seamless reading experience anytime, anywhere
            </p>
<div className="relative w-52 mx-auto md:mx-auto">
             <div className="absolute inset-y-0 start-0 flex items-center ps-3">
               <button type="button" onClick={() => handelSearch()} className="z-10 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"><i className="fa-solid fa-magnifying-glass"></i></button>
             </div>
             <input
               type="text"
               className="block w-full ps-9 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
               placeholder="Search" value={search} onChange={(e)=> setSearch(e.target.value)}
               onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handelSearch(); } }}
             />
           </div>
            {!isLogged && (
              <div className="buttons flex justify-center space-x-4 mt-5">
                <button
                  onClick={() => navigate("/register")}
                  className="bg-white border px-4 py-2 rounded-xl"
                >
                  Register
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-white border px-4 py-2 rounded-xl"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <div className="relative w-2/3 mx-auto h-56 md:h-96 overflow-hidden rounded-base">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full"
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      {/* عرض حالة التحميل أو الكتب */}
      {isLoadingBooks ? (
        <div className="w-4/5 mx-auto flex justify-center items-center py-20 mt-10">
          <div className="text-xl font-bold italic text-inherit flex flex-col items-center">
            <i className="fa-solid fa-spinner fa-spin text-4xl mb-4 text-inherit" ></i>
           Loading ... Please Wait A Minute !
          </div>
        </div>
      ) : books.length === 0 ? (
        <div className="w-full flex justify-center py-10 mt-5">
           <p className="text-xl text-inherit italic">Sorry ! No Data Found</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 w-4/5 justify-around mx-auto my-10">
          {books.map(book=>(
            <BookCard key={book.id} book={book} onFavorite={addFavorite}/>
          ))}
        </div>
      )}
      
      <div className="subscribe_container mt-5 mb-5" style={{backgroundColor:"var(--main_bg)"}}>
         <div className="container w-1/2 mx-auto my-10">
             <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading italic">Subscribe Our Newsletter For Newest Novels Updates</h5>
            
            
 <form className="max-w-md mx-auto mt-7">   
   <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only "></label>
   <div className="relative l">    
     <input type="text" id="search" className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm  focus:ring-brand focus:border-brand shadow-xs placeholder:text-body rounded-x" placeholder="Enter Your Email Here !" required />
     <button type="button" className="absolute end-1.5 bottom-1.5    box-border border border-transparent focus:ring-4 focus:ring-inherit shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"style={{backgroundColor:"var(--main_bg)"}}>Subscribe</button>
   </div>
 </form>


         </div>
       </div>
    </>
  );
}
