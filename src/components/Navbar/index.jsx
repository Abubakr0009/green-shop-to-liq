"use client";

import Auth from "../Auth";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SearchCheck,
  ShoppingBasket,
  HeartHandshake,
  LogIn,
  UserCircle
} from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    setIsLogged(!!storedUser);
  }, [isLogged]);

  return (
    <nav className="w-full z-50 bg-white">
      <div className="flex justify-between items-center max-w-[1240px] mx-auto py-5">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" width={150} height={35} />
        </Link>
        <ul className="flex gap-8 text-lg text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-[#46A358]">Home</Link></li>
          <li><Link to="/blog" className="hover:text-[#46A358]">Blog</Link></li>
        </ul>

        <div className="flex items-center gap-6">
          <button className="hover:text-[#46A358] transition-all">
            <SearchCheck size={24} />
          </button>

          <button
            onClick={() => navigate("/profile/wishlist")}
            className="hover:text-[#46A358] transition-all">
            <HeartHandshake size={24} />
          </button>

          <button
            onClick={() => navigate("/shoppingcart")}
            className="hover:text-[#46A358] transition-all">
            <ShoppingBasket size={24} />
          </button>

          {isLogged ? (
            <button
              onClick={() => navigate("/profile/account")}
              className="bg-[#46A358] hover:bg-[#3e8d4e] px-6 py-1.5 text-lg rounded text-white flex items-center gap-2 transition-all">
              <UserCircle size={20} />
              {user?.user?.name || "User"}
            </button>
          ) : (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#46A358] hover:bg-[#3e8d4e] px-4 py-2 text-base font-semibold rounded-md text-white flex items-center gap-2 transition-all">
              <LogIn size={18} />
              Login
            </button>
          )}
        </div>
      </div>

      <hr className="max-w-[1280px] mx-auto bg-[#46A35880] border-none h-[1px]" />

      <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null}>
        <div className="flex justify-center items-center gap-3 text-xl font-semibold my-4">
          {["Login", "Register"].map((text, i) => (
            <button
              key={text}
              onClick={() => setIsLoginOpen(i === 0)}
              className={isLoginOpen === (i === 0) ? "text-[#46A358]" : ""}>
              {text}
            </button>
          ))}
        </div>
        <Auth
          isLoginOpen={isLoginOpen}
          isRegisterOpen={!isLoginOpen}
          setIsModalOpen={setIsModalOpen}
          setIsLogged={setIsLogged}
        />
      </Modal>
    </nav>
  );
}
