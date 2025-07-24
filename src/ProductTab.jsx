import Product from "./Product.jsx";

function ProductTab() {
    let option = ["hi tech ", "durable ", "fast"];
    return (
        <>
        <Product title= "Phone " price = "5000" Features= {option} />
         <Product title= "laptop " price = "50000" Features= {option}  />
         {/* <Product title= "laptop " price = "50000"   />
          <Product title= "Pen " price = "50" />
           <Product title= "notebook "  /> */}
        </>
    )
}
export default ProductTab;