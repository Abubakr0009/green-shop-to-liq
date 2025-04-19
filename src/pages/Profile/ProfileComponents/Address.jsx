import React, { useState, useEffect } from 'react';

export default function Address() {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    const [user, setUser] = useState(storedUser.user || {});
    const [billingAddress, setBillingAddress] = useState(user.billing_address || {});

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify({ user }));
    }, [user]);

    const handleInputChange = (e, field, isBilling = false) => {
        const value = e.target.value;
        if (isBilling) {
            setBillingAddress((prev) => ({ ...prev, [field]: value }));
            setUser((prev) => ({ ...prev, billing_address: { ...prev.billing_address, [field]: value } }));
        } else {
            setUser((prev) => ({ ...prev, [field]: value }));
        }
    };

    return (
        <div>
            <form>
                <div className='flex gap-3 justify-between items-center'>
                    <label className='w-full my-3'>
                        <div className='font-semibold text-sm'><span className='text-red-500'>*</span> First Name</div>
                        <input className='w-full my-2 py-2 px-3 rounded-lg border bg-white' type="text" value={user?.name || ''} onChange={(e) => handleInputChange(e, 'name')} />
                    </label>
                    <label className='w-full my-3'>
                        <div className='font-semibold text-sm'><span className='text-red-500'>*</span> Last Name</div>
                        <input className='w-full my-2 py-2 px-3 rounded-lg border bg-white' type="text" value={user?.surname || ''} onChange={(e) => handleInputChange(e, 'surname')} />
                    </label>
                </div>

                <div className='flex gap-3 justify-between items-center'>
                    <label className='w-full my-3'>
                        <div className='font-semibold text-sm'><span className='text-red-500'>*</span> Country / Region</div>
                        <input className='w-full my-2 py-2 px-3 rounded-lg border bg-white' type="text" placeholder='Enter your country / region' value={billingAddress.country || ''} onChange={(e) => handleInputChange(e, 'country', true)} />
                    </label>
                    <label className='w-full my-3'>
                        <div className='font-semibold text-sm'><span className='text-red-500'>*</span> Town / City</div>
                        <input className='w-full my-2 py-2 px-3 rounded-lg border bg-white' type="text" placeholder='Enter your town / city' value={billingAddress.town || ''} onChange={(e) => handleInputChange(e, 'town', true)} />
                    </label>
                </div>

                <div className='flex gap-3 justify-between items-center'>
                    <label className='w-full my-3'>
                        <div className='font-semibold text-sm'><span className='text-red-500'>*</span> Street Address</div>
                        <input className='w-full my-2 py-2 px-3 rounded-lg border bg-white' type="text" placeholder='Enter your street name and house number' value={billingAddress.street_address || ''} onChange={(e) => handleInputChange(e, 'street_address', true)} />
                    </label>
                    <label className='w-full my-3'>
                        <div className='font-semibold text-sm'><span className='text-red-500'>*</span> Extra Address</div>
                        <input className='w-full my-2 py-2 px-3 rounded-lg border bg-white' type="text" placeholder='Enter your apartment or suite (optional)' value={billingAddress.extra_address || ''} onChange={(e) => handleInputChange(e, 'extra_address', true)} />
                    </label>
                </div>

                <div className='flex gap-3 justify-between items-center'>
                    <label className='w-full my-3'>
                        <div className='font-semibold text-sm'><span className='text-red-500'>*</span> State</div>
                        <input className='w-full my-2 py-2 px-3 rounded-lg border bg-white' type="text" placeholder='Enter your state' value={billingAddress.state || ''} onChange={(e) => handleInputChange(e, 'state', true)} />
                    </label>
                    <label className='w-full my-3'>
                        <div className='font-semibold text-sm'><span className='text-red-500'>*</span> Zip</div>
                        <input className='w-full my-2 py-2 px-3 rounded-lg border bg-white' type="text" placeholder='Enter your ZIP code' value={billingAddress.zip || ''} onChange={(e) => handleInputChange(e, 'zip', true)} />
                    </label>
                </div>

                <div className='flex gap-3 justify-between items-center'>
                    <label className='w-full my-3'>
                        <div className='font-semibold text-sm'><span className='text-red-500'>*</span> Email Address</div>
                        <input className='w-full my-2 py-2 px-3 rounded-lg border bg-white' type="email" value={user.email || ''} onChange={(e) => handleInputChange(e, 'email')} />
                    </label>
                    <label className='w-full my-3'>
                        <div className='font-semibold text-sm'><span className='text-red-500'>*</span> Phone</div>
                        <div className='w-full my-2 flex items-center group active:border-green-500 hover:border-green-500 transi focus:border-green-500 outline-none rounded-lg border bg-white'>
                            <div className='bg-[#FBFBFB] py-2 group-hover:border-r-green-500 transi rounded-l-lg px-3 border-r-2 font-semibold'>
                                +998
                            </div>
                            <input className='w-full outline-none rounded-r-lg py-2 px-3 bg-white' placeholder='Phone number' type="text" value={user?.phone_number || ''} onChange={(e) => handleInputChange(e, 'phone_number')} />
                        </div>
                    </label>
                </div>

                <button className='bg-[#46A358] hover:bg-[#46A358]/80 text-white py-2 px-3 cursor-pointer rounded font-semibold'>
                    Save My Address
                </button>
            </form>
        </div>
    );
}
