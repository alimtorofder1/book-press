import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const book = useLoaderData();
    const {title, _id, img , description} = book;
    return (
        <div className="mt-10">
           <div className="card mx-auto card-compact bg-base-100 h-72 w-52 shadow-xl">
  <figure>
    <img
      src={img}
      alt="Shoes" />
  </figure>
</div>
        <div className="mt-20 mb-32">
            <h2 className="text-5xl mb-10">{title}</h2>
            <p>{description}</p>
        </div>
        </div>
    );
};

export default CardDetails;