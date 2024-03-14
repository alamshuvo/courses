

const Course = ({course,handleAddToCart}) => {
    // console.log(course);
    const {name,description,credit,photo,price}=course
    return (
        <div>
     <div className="">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure><img src={photo} alt={name} /></figure>
           <div className="card-body">
          <h2 className="card-title">{name.slice(0,20)}</h2>
          <p>{description.slice(0,40)}</p>
          <p>Credit:{credit}</p>
          <p>Price : {price}</p>
          <div className="card-actions">
          <button onClick={()=>handleAddToCart(course)} className="btn btn-info w-full">Add to Cart</button>
        </div>
         </div>
    </div>
       </div>
        </div>
    );
};

export default Course;