//import React from 'react'
import PropTypes from 'prop-types'

function Card({username, price, code}) {
  
  return (
    <div className="w-100 flex flex-col rounded-xl bg-black min-h-[19rem] ">
          <div>
            <img
              src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
              alt="test"
              className="object-cover object-center rounded-t-xl"
            />
          </div>
          <div className="flex flex-col py-3 px-3 pb-10 bg-white">
            <div className="flex justify-between ">
              <h4 className="font-bold ">{username} nft accidental </h4>
              <h4>Price</h4>
            </div>
            <div className="flex  justify-between">
              <p>{code}</p>
              <p>{price}</p>
            </div>
          </div>
        </div>
  )
}

Card.propTypes = {
  username: PropTypes.string.isRequired,  // Ensure username is a string and required
  price: PropTypes.string.isRequired,     // Ensure price is a string and required
  code: PropTypes.string.isRequired,      // Ensure code is a string and required
};

export default Card