import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ imageUrl, name, rating, price, quantity, slug }) => {
  return (
    <div className="p-4 flex flex-col items-center justify-center bg-gradient-to-tr from-black to-stone-900 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="h-[320px] overflow-hidden rounded-t-lg">
        <Image
          className="h-[300px] overflow-hidden"
          src={imageUrl}
          alt={name}
          width={460}
          height={460}
          layout="intrinsic"
          objectFit="cover"
        />
      </div>

      <h2 className="w-full text-[20px] font-semibold text-white text-center mt-4">{name}</h2>

      <div className="flex justify-center items-center my-2">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`h-5 w-5 ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.31 4.034a1 1 0 00.95.691h4.216c.969 0 1.371 1.24.588 1.81l-3.41 2.473a1 1 0 00-.364 1.118l1.31 4.034c.3.921-.755 1.688-1.538 1.118l-3.41-2.474a1 1 0 00-1.175 0l-3.41 2.474c-.783.57-1.838-.197-1.538-1.118l1.31-4.034a1 1 0 00-.364-1.118L2.4 9.463c-.783-.57-.381-1.81.588-1.81h4.216a1 1 0 00.95-.691l1.31-4.034z" />
          </svg>
        ))}
        <span className="ml-2 text-white text-lg">({rating})</span>
      </div>

      <div className="text-center text-white text-lg">
        <p>${price} - {quantity}ml</p>
      </div>
      
      <Link href={`/products/${slug}`}>
       
      </Link>
    </div>
  );
};

export default ProductCard;
