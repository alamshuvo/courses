import Cart from "../Cart/Cart";
import Course from "../Course/Course";

const Courses = ({courses}) => {


    return (
        <div >
            <div className="flex md:flex-row flex-col gap-5">
            <div className="md:w-3/4 gap-5 grid md:grid-cols-3">
         {courses.map(course=><Course key={course.id} course={course}></Course>)}
         </div>
         <div className="flex justify-center bg-gray-200 p-5 rounded-lg">
         <Cart></Cart>
         </div>
         </div> 
        
        
        </div>
    );
};

export default Courses;