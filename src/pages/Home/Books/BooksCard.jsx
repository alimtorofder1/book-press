import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const BooksCard = ({book ,books , setbooks}) => {
  const handleDelet = _id  =>{
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
     

        fetch(`http://localhost:5000/books/${_id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.deletedCount > 0 ){
               Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        const remaining = books.filter(book => book._id !== _id);
        setbooks(remaining)
          }
        })

      }
    });
  }
    const {_id ,img , title , price , description}=book;
    return (
        <div className="card bg-base-100 w-96 mb-10  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img}
      className="rounded-xl h-72 w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p> ${price}</p>
    <div className="card-actions">
      <Link to={`/bookvisit/${_id}`}>
      <button className="btn btn-accent">Visit Now</button>
      </Link>
      <button onClick={() => handleDelet(_id)} className="btn btn-error">X</button>
    </div>
  </div>
</div>
    );
};

export default BooksCard;