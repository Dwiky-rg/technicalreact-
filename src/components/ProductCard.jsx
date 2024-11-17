import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";
import formatToIDRCurrency from "../utils/formatToIDRCurrency";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug}` ?? ""}
      className="flex flex-col max-w-[370px] w-full bg-gradient-to-r from-[#081116] to-[#1f2b33] hover:ring-4 hover:ring-[#6247eb] rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
    >
      <img
        src={product?.imageUrl ?? ""}
        alt={product?.name ?? "No Title"}
        className="block w-full h-[300px] mb-4 object-cover rounded-t-lg"
      />
      <div className="flex flex-col p-4 gap-4 bg-[#101C23] rounded-b-lg">
        <h4 className="font-semibold text-lg text-white transition-all duration-200 hover:text-[#6247eb]">
          {product?.name ?? "No Title"}
        </h4>
        <span className="text-sm font-medium text-[#eaeaea]">
          Type : {product?.category ?? "Uncategorized"}
        </span>
        <span className="text-lg font-semibold text-white">
          {product?.price > 0
            ? formatToIDRCurrency(product.price)
            : "Not For Sale"}
        </span>

        {/* Stock Status */}
        <div>
          {product.stock <= 0 ? (
            <p className="text-xl font-semibold text-center text-red-500">
              Out of Stock
            </p>
          ) : product.stock <= 5 && product.stock !== 0 ? (
            <>
              <p className="text-xl font-semibold text-center text-yellow-500">
                Almost Sold Out
              </p>
              <Button
                type="button"
                className="mt-2 p-3 bg-[#6173E6] text-white hover:bg-[#5969cf] active:bg-[#4956ab] rounded-full w-full text-center"
              >
                Product Detail
              </Button>
            </>
          ) : (
            <Button
              type="button"
              className="mt-2 p-3 bg-[#6173E6] text-white hover:bg-[#5969cf] active:bg-[#4956ab] rounded-full w-full text-center"
            >
              Product Detail
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
}

ProductCard.prototypes = {
  product: PropTypes.object.isRequired,
};
