import Cart from "../Cart/Cart";
import Course from "../Course/Course";

const Courses = ({courses,handleAddToCart,cart}) => {


    return (
        <div >
            <div className="flex md:flex-row flex-col gap-5">
            <div className="md:w-3/4 gap-5 grid md:grid-cols-3">
         {courses.map(course=><Course key={course.id} course={course} handleAddToCart={handleAddToCart}></Course>)}
         </div>
         <div className=" bg-gray-200 p-5 rounded-lg">
         <Cart cart={cart}></Cart>
         </div>
         </div> 
        
        
        </div>
    );
};

export default Courses;