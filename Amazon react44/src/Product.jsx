import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrices = ["12,485", "11,999", "1,566", "599"];
  let newPrices = ["8,999", "9,199", "799", "287"];
 let description = [
  ["8,000 DPI", "5 Programmable buttons"],
  ["intuitive surface", "designed for iPad Pro"],
  ["designed for iPad Pro", "intuitive surface"],
  ["wireless", "Optical orientation"],
];

  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>      
    <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
