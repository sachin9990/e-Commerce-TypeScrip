import { FaPlus } from "react-icons/fa";

type ProductProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = "sdfghj";

function ProductCard({
  productId,
  photo,
  name,
  price,
  stock,
  handler,
}: ProductProps) {
  return (
    <div className="productCard">
      {/* <img src={`${server}/${photo}}`} alt={name} /> */}
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>
      {/* The below div is used as an overlay */}
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
