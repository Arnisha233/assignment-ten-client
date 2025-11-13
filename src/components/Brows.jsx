import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
const Brows = ({ product }) => {
  const { name, category, rentPrice, _id, status } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        {/* <figure className="h-48 overflow-hidden">
          <img
            src=""
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </figure> */}
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="text-white bg-[#364d59] badge text-[18px] py-2 rounded-full my-2.5">
            {category}
          </div>
          <p className="line-clamp-1">{rentPrice}</p>
          <p>
            {status === "unavailable" ? (
              <span className="badge badge-error text-white">Unavailable</span>
            ) : (
              <span className="badge badge-success text-white">Available</span>
            )}
          </p>
          {/* <p className="text-sm text-base-content/70">by {author}</p> */}
          <div className="card-actions justify-between items-center mt-4">
            <div className="flex gap-4 text-sm text-base-content/60">
              {/* <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {views}
            </span> */}
              {/* <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {likes}
            </span> */}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-[30px] py-[10px] rounded-full bg-[#007bff] text-white w-full"
            >
              <Link to={`/car-details/${_id}`}>View Details</Link>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brows;
