import { totalCredits } from "../../App";


const Cart = ({cart}) => {
    console.log(cart);
    const {name, price,credit}=cart;
    const credits = cart.reduce((p,c)=>p+c.credit,0)
    return (
        <div>
            <div>
                <h2>Credit Hours Remaning {totalCredits -credits} hours</h2>
            </div>
            <div className="divider"></div>
            <div>
                <h3>Course Name</h3>
                <div>
                    
                        <ol>
                            {
                            cart.map((c,idx)=>(
                                <li key={idx}>{c.name}</li>
                            ))
                            }
                            
                        </ol>
                    
                    
                </div>
            </div>
            <div className="divider"></div>
            <div>Credit: {
                credits
                }</div>
            <div className="divider"></div>
            <div>Total Price: {
                cart.reduce((p,c)=>p+c.price,0)
                } </div>
            <div className="divider"></div>
        </div>
    );
};

export default Cart;