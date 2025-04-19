import { Heart, Search, ShoppingCart } from "lucide-react";
import { notification } from "antd";
import classNames from "classnames";
import '@ant-design/v5-patch-for-react-19';

const api = import.meta.env.VITE_API;

export default function ProductCard({ data }) {
    if (!data) return null;

    const {
        title: name,
        _id: id,
        main_image,
        price,
        discount_price,
        category: route_path,
        discount: isSale,
    } = data;

    const accessToken = JSON.parse(localStorage.getItem("user"))?.user?._id || '64bebc1e2c6d3f056a8c85b7';
    const Wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isWished = Wishlist.some(item => item.flower_id === id);

    const discountPercent = price && discount_price
        ? Math.round(((price - discount_price) / price) * 100)
        : 0;

    const notify = () => {
        notification.success({
            message: "Added to Cart",
            description: `${name} was successfully added to your cart.`,
            placement: "topRight",
            duration: 2,
        });
    };

    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const idx = cart.findIndex(item => item._id === id);

        if (idx > -1) {
            cart[idx].quantity += 1;
        } else {
            cart.push({ ...data, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        notify();
    };

    return (
        <div className="max-w-[300px] w-full bg-gray-100 text-lg p-3 border-t-2 rounded group hover:shadow-md transition-all">
            <div className="relative bg-[#FBFBFB] h-[275px] flex justify-center items-center rounded overflow-hidden">
                <img
                    src={main_image}
                    alt={name}
                    loading="lazy"
                    className="w-[250px] h-auto object-contain transition-transform duration-300 scale-100 group-hover:scale-105 mix-blend-multiply"
                />

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button onClick={handleAddToCart} className="p-2 bg-white rounded hover:bg-gray-300 transition">
                        <ShoppingCart size={19} />
                    </button>
                    <button className={classNames(
                        "p-2 bg-white rounded hover:bg-gray-300 transition",
                        { "text-[#46A358]": isWished }
                    )}>
                        <Heart size={19} />
                    </button>
                    <button className="p-2 bg-white rounded hover:bg-gray-300 transition">
                        <Search size={19} />
                    </button>
                </div>

                {isSale && discountPercent > 0 && (
                    <div className="absolute top-0 left-0 bg-[#46A358] text-white px-2 py-[2px] font-bold rounded-br">
                        {discountPercent}% <span className="text-sm">OFF</span>
                    </div>
                )}
            </div>

            <div className="mt-4">
                <h4 className="font-bold text-base group-hover:text-[#46A358] transition">{name}</h4>
                {discountPercent > 0 ? (
                    <p className="text-[#46A358] font-semibold">
                        ${Number(discount_price).toFixed(2)}{" "}
                        <span className="line-through text-gray-400 text-sm">${price.toFixed(2)}</span>
                    </p>
                ) : (
                    <p className="text-black font-semibold">${price.toFixed(2)}</p>
                )}
            </div>
        </div>
    );
}
