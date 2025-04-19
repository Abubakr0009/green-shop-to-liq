
"use client"
import { Facebook, Instagram, Linkedin, Mail, MailIcon, MapPin, PhoneCall, Twitter, Youtube } from "lucide-react"

export default function Footer() {
    return (
        <footer className="mt-[100px]">
            <div className="max-w-[1240px] m-auto bg-[#FBFBFB]">
                <div className="flex justify-between items-start pb-5 pt-7 px-4">
                    <div className="w-[240px] pl-[20px] px-5 border-r-2 border-r-[#46A3581A]">
                        <div><img src="/images/footer3.png" alt="img" /></div>
                        <div><img src="/images/footer4.png" alt="img" /></div>
                        <div>
                            <h3 className="font-bold text-lg mt-4 mb-1">Garden Care</h3>
                            <p className="text-sm text-gray-400">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        </div>
                    </div>
                    <div className="w-[240px] pl-[20px] px-5 border-r-2 border-r-[#46A3581A]">
                        <div><img src="/images/footer1.png" alt="img" /></div>
                        <div>
                            <h3 className="font-bold text-lg mt-4 mb-1">Plant Renovation</h3>
                            <p className="text-sm text-gray-400">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        </div>
                    </div>
                    <div className="w-[240px] pl-[20px] px-5 ">
                        <div><img src="/images/footer2.png" alt="img" /></div>
                        <div>
                            <h3 className="font-bold text-lg mt-4 mb-1">Watering Graden</h3>
                            <p className="text-sm text-gray-400">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        </div>
                    </div>
                    <div className="w-[400px]">
                        <h3 className="font-bold text-lg">Would you like to join newsletters?</h3>
                        <div className="flex items-center mt-3 mb-7">
                            <input type="text" className="bg-white py-2 px-4 w-full rounded-l shadow" placeholder="enter your email address..." />
                            <button className="py-2 px-5 rounded-r text-white font-semibold bg-[#46A358]">Join</button>
                        </div>
                        <p className="text-sm text-gray-400">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
                    </div>
                </div>
                <div className="bg-[#46A3581A] flex justify-between items-center p-5 pl-8">
                    <div><img src="/images/logo.svg" alt="logog" /></div>
                    <div className="max-w-[250px] flex gap-2 items-center text-sm text-[#3D3D3D]"><MapPin className="text-[25px] text-[#46A358]" /> 70 West Buckingham Ave. Farmingdale, NY 11735</div>
                    <div className="max-w-[200px] flex gap-2 items-center text-sm text-[#3D3D3D]"><MailIcon className=" text-[25=0px] text-[#46A358]" /> contact@greenshop.com</div>
                    <div className="max-w-[400px] w-full flex gap-2 items-center text-sm text-[#3D3D3D]"><PhoneCall className="text-[20px] text-[#46A358]" /> +88 01911 717 490</div>
                </div>
                <div className="max-w-7xl mt-[15px] mx-auto px-4 grid grid-cols-3 gap-6 bg-[#FBFBFB] mt-[30px] ml-[20px]">
                    <div>
                        <h4 className="font-bold mb-2">My Account</h4>
                        <ul className="text-[gray]">
                            <li><a href="#" className="hover:text-[green] font-inter font-[400] text-[14px] mt-[5px]">My Account</a></li>
                            <li><a href="#" className="hover:text-[green] font-inter font-[400] text-[14px] mt-[10px]">Address</a></li>
                            <li><a href="#" className="hover:text-[green] font-inter font-[400] text-[14px] mt-[10px]">Wishlist</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Categories</h4>
                        <ul className=" text-[gray]"> 
                            <li><a href="#" className="hover:text-[green] font-inter font-[400] text-[14px] mt-[5px]">House Plants</a></li>
                            <li><a href="#" className="hover:text-[green] font-inter font-[400] text-[14px] mt-[10px]">Potter Plants</a></li>
                            <li><a href="#" className="hover:text-[green] font-inter font-[400] text-[14px] mt-[10px]">Seeds</a></li>
                            <li><a href="#" className="hover:text-[green] font-inter font-[400] text-[14px] mt-[10px]">Small Plants</a></li>
                            <li><a href="#" className="hover:text-[green] font-inter font-[400] text-[14px] mt-[10px]">Accessories</a></li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <h4 className="font-bold mb-2">Social Media</h4>
                            <div className="flex gap-[10px] mt-[18px]">
                                <img className="w-[20px] h-[20px] " src="/images/f.svg" alt="img" />
                                <img className="w-[20px] h-[20px]" src="/images/i.svg" alt="img" />
                                <img className="w-[20px] h-[20px]" src="/images/t.svg" alt="img" />
                                <img className="w-[20px] h-[20px]" src="/images/l.svg" alt="img" />
                                <img className="w-[20px] h-[20px]" src="/images/u.svg" alt="img" />
                            </div>
                        </div>
                        <div className="mt-[22px]">
                            <h4 className="font-bold mb-2">We accept</h4>
                            <div className="flex gap-[10px] mt-[18px]">
                                <img className="w-[30px] h-[30px]" src="/images/paypal.svg" alt="img" />
                                <img className="w-[30px] h-[30px]" src="/images/mastercard.svg" alt="img" />
                                <img className="w-[30px] h-[30px]" src="/images/visa.svg" alt="img" />
                                <img className="w-[30px] h-[30px]" src="/images/amex.svg" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-[100px] text-sm text-[gray]  ">&copy; 2021 GreenShop. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

