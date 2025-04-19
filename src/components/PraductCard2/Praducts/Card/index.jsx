import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCountFromShopping,
  deleteFlowerFromShopping,
  increaseCountFromShopping,
} from "../../../../redux/ShoppingSlice";
import { Tooltip } from "antd";

const Card = ({ title, price, _id, count, main_image }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-[#FBFBFB] h-[70px] w-full flex">
      <div className="w-[40%] flex items-center gap-2">
        <img className="w-[70px] h-[70px]" src={main_image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p className="font-light text-[14px]">SKU: {_id}</p>
        </div>
      </div>
      <div className="w-[20%] flex items-center text-[#727272]">${price}</div>
      <div className="w-[20%] flex items-center">
        <div className="flex gap-3">
          <button
            onClick={() => dispatch(decreaseCountFromShopping({ _id }))}
            className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white"
          >
            -
          </button>
          <h3 className="font-medium text-[18px]">{count}</h3>
          <button
            onClick={() => dispatch(increaseCountFromShopping({ _id }))}
            className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white"
          >
            +
          </button>
        </div>
      </div>
      <div className="w-[20%] flex items-center justify-between pr-[10px]">
        <h3>${Number(Number(price) * Number(count)).toFixed(2)}</h3>
        <Tooltip title="Delete">
          <button
            onClick={() => {
              dispatch(deleteFlowerFromShopping({ _id }));
            }}
            className="cursor-pointer"
          >
            <span
              role="img"
              aria-label="delete"
              tabIndex="-1"
              className="anticon anticon-delete cursor-pointer"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="delete"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
              </svg>
            </span>
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Card;
