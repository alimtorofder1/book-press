import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import BooksCard from "./BooksCard";


const Books = () => {
    const [books , setbooks] = useState([]);


    useEffect( ()=>{
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setbooks(data))
    },[])
    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold">Popular books in Programming</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing , adipisicing <br /> elit. ut quos cupiditate, nemo devitis explicabo voluptas</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-4 mt-20 gap-6 mb-56">
                {
                    books.map(book => <BooksCard key={book._id} book={book} books={books} setbooks={setbooks}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default Books;