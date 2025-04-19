import React from 'react';

function Track() {
    const storedOrderItems = JSON.parse(localStorage.getItem("order")) || [];

    return (
        <div className="text-center text-gray-500 text-lg mt-10">
            {storedOrderItems.length > 0 ? (
                <div>
                    <h3>Your Orders:</h3>
                    {storedOrderItems.map((item) => (
                        <div key={item._id} className="order-item flex justify-between my-2">
                            <img src={item.main_image} alt={item.title} className="w-20 h-20 object-contain" />
                            <div>
                                <h4>{item.title}</h4>
                                <p>${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <div className="order-total">
                        <h4>Total: ${storedOrderItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</h4>
                    </div>
                </div>
            ) : (
                <div>No orders found. Please place an order first.</div>
            )}
        </div>
    );
}

export default Track;















// import React from 'react';

// function Track() {
//     const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];

//     return (
//         <div className="text-center text-gray-500 text-lg mt-10">
//             {storedCartItems.length > 0 ? (
//                 <div>
//                     <h3>Your Orders:</h3>
//                     {storedCartItems.map((item) => (
//                         <div key={item._id} className="order-item flex justify-between my-2">
//                             <img src={item.main_image} alt={item.title} className="w-20 h-20 object-contain" />
//                             <div>
//                                 <h4>{item.title}</h4>
//                                 <p>${item.price.toFixed(2)}</p>
//                             </div>
//                         </div>
//                     ))}
//                     <div className="order-total">
//                         <h4>Total: ${storedCartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</h4>
//                     </div>
//                 </div>
//             ) : (
//                 <div>No orders found. Please place an order first.</div>
//             )}
//         </div>
//     );
// }

// export default Track;
















// import React from 'react'

// function Track() {
//   return (
//     <div className='text-center text-gray-500 text-lg mt-10'>No track yet</div>
//   )
// }

// export default Track