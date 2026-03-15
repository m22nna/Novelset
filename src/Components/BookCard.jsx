import { Card } from "flowbite-react"
export default function BookCard({book, onFavorite}){

  const cover = book?.formats?.["image/jpeg"] || 
    "https://via.placeholder.com/200x300?text=No+Cover";

  // title و author placeholders
  //const title = book?.title || "No Title";
const title = (book?.title || "No Title")
  .split(" ")
  .slice(0,5)
  .join(" ");
  const author = book?.authors?.[0]?.name || "Unknown Author";

  // استخراج رابط القراءة، نفضل HTML وإلا نأخذ النص العادي
  const readLink = book?.formats?.["text/html"] 
    || book?.formats?.["text/plain; charset=utf-8"] 
    || book?.formats?.["text/plain"] 
    || null;

    return <>
    
 <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5" >

  <div className="mb-5 mt-2.5 flex items-center justify-around">
    <img
    src={cover}
    alt={title}
    className="mx-auto"
    />
  </div>
  <div className="flex items-center justify-between flex-wrap gap-2 mt-2">
    <div className="w-full text-center">
      <h5 className="text-xl font-bold text-inherit">{title}</h5>
      <p className="text-sm text-gray-500">{author}</p>
    </div>
    
    <div className="w-full flex justify-center items-center gap-4 mt-2">
      {readLink && (
        <a 
          href={readLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-transparent border px-4 py-1 rounded-xl text-sm font-semibold hover:bg-neutral-tertiary-medium transition-colors"
          style={{color:"var(--brand)", borderColor:"var(--brand)"}}
        >
          Read
        </a>
      )}

      {onFavorite &&(
        <button onClick={()=> onFavorite(book)} className="rounded-lg bg-transparent text-center text-2xl font-medium text-white transition-transform hover:scale-110">
          <i className="fa-solid fa-heart" style={{color:"var(--main_bg)"}}></i>
        </button>
      )}
    </div>
  </div>
</Card>
   
    

    
    </>
}