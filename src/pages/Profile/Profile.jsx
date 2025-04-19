import { Heart, LogOut, MapPin, ShoppingBag, Truck, User } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { Modal, Button } from "antd";
import { motion } from "framer-motion";

export default function ProfileLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    return (
        <div className="max-w-[1240px] mt-20 m-auto px-4 flex items-start justify-between ">
            <div className="w-[21%] rounded p-4 bg-[#FBFBFB]">
                <ul>
                    <li className="text-xl font-bold">My Account</li>
                    <li>
                        <NavLink to="/profile/account" className={({ isActive }) => `flex items-center gap-2 font-semibold px-2 py-1 my-2 text-lg ${isActive ? "text-[#46A358] border-l-4 border-[#46A358]" : "border-l border-transparent "} hover:text-[#46A358]`} >
                            <User /> Account Details
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile/myproducts" className={({ isActive }) => `flex items-center gap-2 font-semibold px-2 py-1 my-2 text-lg ${isActive ? "text-[#46A358] border-l-4 border-[#46A358]" : "border-l border-transparent "} hover:text-[#46A358]`} >
                            <ShoppingBag /> My Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile/address" className={({ isActive }) => `flex items-center gap-2 font-semibold px-2 py-1 my-2 text-lg ${isActive ? "text-[#46A358] border-l-4 border-[#46A358]" : "border-l border-transparent "} hover:text-[#46A358]`} >
                            <MapPin /> Address
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile/wishlist" className={({ isActive }) => `flex items-center gap-2 font-semibold px-2 py-1 my-2 text-lg ${isActive ? "text-[#46A358] border-l-4 border-[#46A358]" : "border-l border-transparent "} hover:text-[#46A358]`} >
                            <Heart /> Wishlist
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile/track" className={({ isActive }) => `flex items-center gap-2 font-semibold px-2 py-1 my-2 text-lg ${isActive ? "text-[#46A358] border-l-4 border-[#46A358]" : "border-l border-transparent "} hover:text-[#46A358]`} >
                            <Truck /> Track Order
                        </NavLink>
                    </li>
                    <hr className="my-5 border-none h-0.5 rounded bg-[#46A358]/30" />
                    <li onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 font-semibold px-2 py-1 my-2 text-lg text-red-500 cursor-pointer"><LogOut /> Logout</li>
                </ul>
            </div>
            <div className="w-[74%] ">
                <Outlet />
            </div>

            <Modal
                title="Logout Confirmation"
                visible={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                centered
            >
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                    <p className="text-base">Please make sure, bacause this action cannot be undone!</p>
                    <div className="flex justify-center gap-4">
                        <div className="mt-5 flex gap-4">
                            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                            <Button type="primary" danger onClick={handleLogout}>I'm sure</Button>
                        </div>
                    </div>
                </motion.div>
            </Modal>
        </div>
    );
}