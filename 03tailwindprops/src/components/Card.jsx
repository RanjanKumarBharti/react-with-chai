import React from 'react';

function Card({ username, btn="visit me" }){
  return (
    <>
      <div className="card bg-white w-96 shadow-xl rounded-xl text-black">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{username}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">{btn}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

