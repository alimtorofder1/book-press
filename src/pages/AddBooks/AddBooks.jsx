import Swal from "sweetalert2";


const AddBooks = () => {

        const AddBook = e =>{
             e.preventDefault();

             const form =e.target;

             const name = form.name.value;
             const description = form.description.value;
             const price = form.price.value;
             const photo = form.photo.value;

             const newBook = {name , description , price , photo}

             fetch('http://localhost:5000/books',{
                method:'POST',
                headers: {
                        'content-type':'application/json'
                },
                body:JSON.stringify(newBook)
             })
             .then(res => res.json())
             .then(data =>{
                console.log(data)
                if(data.insertedId){
                        Swal.fire({
                                
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                              });  
                }
             })

        }

    return (
        <div>
        <h2 className="text-center text-3xl font-bold">Add Books</h2>
    <form onSubmit={AddBook}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder="name" name="name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Description</span>
      </label>
      <input type="text" placeholder="Description" name="description" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Price</span>
      </label>
      <input type="text" placeholder="price" name="price" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Img URL</span>
      </label>
      <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
    </div>
        </div>
        <input className="btn btn-primary w-full mt-10 mb-10" type="submit" value="Add Book" />
    </form>
</div>
    );
};

export default AddBooks;