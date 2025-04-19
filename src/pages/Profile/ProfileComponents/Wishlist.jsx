import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../../../components/ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigate } from 'react-router-dom';

const api = import.meta.env.VITE_API;

function Wishlist() {
    const [accessToken, setAccessToken] = useState('');
    
    useEffect(() => {
        setAccessToken(JSON.parse(localStorage.getItem("user"))?.user?._id || '64bebc1e2c6d3f056a8c85b7');
    }, []);

    if (accessToken === '64bebc1e2c6d3f056a8c85b7') {
        return <Navigate to="/login" replace={true} />
    }

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user?.token;
    const topRef = useRef(null);

    const fetchWishlist = async () => {
        const response = await axios.get(`${api}user/wishlist?access_token=${accessToken}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return response.data.data || [];
    };

    const { data: wishItems = [], isLoading, isError } = useQuery({
        queryKey: ['wishlist', accessToken],
        queryFn: fetchWishlist,
        enabled: !!token && !!accessToken,
        onSuccess: (data) => {
            localStorage.setItem("wishlist", JSON.stringify(data));
        }
    });

    useEffect(() => {
        setCurrentPage(1);
    }, [token]);

    if (isError) return <div>Xatolik yuz berdi!</div>;

    const totalPages = Math.ceil(wishItems.length / itemsPerPage);
    const visibleItems = wishItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div ref={topRef}>
            {isLoading && (
                <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="max-w-[300px] w-full border-t-2 border-t-transparent hover:border-t-[#46A358] transi group rounded">
                            <div className="card_img relative transi rounded overflow-hidden">
                                <div className="bg-[#FBFBFB] loading transi w-full h-[275px] flex justify-center items-center">
                                    <div className="w-full h-auto object-contain mix-blend-multiply scale-100 group-hover:scale-110 transi" />
                                </div>
                            </div>
                            <div>
                                <h4 className="transi my-2 w-[60%] loading h-[25px]"></h4>
                                <p className="w-[40%] h-[24px] loading"></p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!isLoading && wishItems.length === 0 && (
                <div className="text-center text-gray-500 text-lg mt-10">
                    You currently have no items!
                </div>
            )}

            {wishItems.length > 0 && (
                <>
                    <div className='grid grid-cols-2 sm:grid-cols-3 justify-items-center gap-5'>
                        {visibleItems.map((product, index) => (
                            <ProductCard key={index} data={product} />
                        ))}
                    </div>

                    {wishItems.length > 6 && (
                        <div className="flex justify-center sm:justify-end items-center gap-2 mt-5">
                            <button className="p-2 bg-gray-200 rounded disabled:opacity-40"
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                <ChevronLeft />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button key={i} onClick={() => handlePageChange(i + 1)}
                                    className={`px-4 py-2 rounded ${currentPage === i + 1 ? "bg-[#46A358] text-white" : "bg-gray-200"}`}>
                                    {i + 1}
                                </button>
                            ))}
                            <button className="p-2 bg-gray-200 rounded disabled:opacity-50"
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Wishlist;
