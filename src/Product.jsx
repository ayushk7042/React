
function Product({title, price , Features}) {
    return (
        <div
            classname = "product">
                <h3>{title}</h3>
                <h5>price :{price}</h5>
                <p>{Features.map((feature)=> <li>{feature}</li>)}</p>
                {price > 5000 && <p> "Discount of 5%</p>}
        </div>
    )
} 
export default Product;