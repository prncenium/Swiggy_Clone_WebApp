import React from 'react'
import { CDN_url } from '../utils/const'

const ResturantCard = ({res}) => {

    const {cloudinaryImageId, name, cuisines, avgRating, sla, areaName } = res?.info

  return (
    <div className='resturant-card rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300'>
      <div className='relative h-52 overflow-hidden'>
        <img className='w-full h-full object-cover' src={`${CDN_url+cloudinaryImageId}`} alt={name} />

        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'>
            {/* Offer badge on image */}
            {res?.info?.aggregatedDiscountInfoV3?.subHeader && (
                <div className='absolute bottom-3 left-3 text-white font-bold text-xl'>
                    {res?.info?.aggregatedDiscountInfoV3?.header} {res?.info?.aggregatedDiscountInfoV3?.subHeader}
                </div>
            )}
        </div>
      </div>

      {/*  Resturats Details */}
      <div className='p-3'>
        <h3 className='font-bold text-xl truncate' title={name}>{name}</h3>

        {/* Rating and Time */}
        <div className='flex items-center mt-1 mb-2'>
            <div className='flex items-center gap-1'>
                <div className='bg-green-600 rounded-full text-white p-1 w-6 h-6 flex items-center justify-center text-xs'> 
                    <span>★</span>
                </div>
                <span className='ml-0.5'>{avgRating}</span>
            </div>
            <span className='mx-2 text-gray-800 '>•</span>
            <span className='text-gray-800 font-semibold'>{sla.slaString}</span>
        </div>

        {/* Cuisines */}
        <p className='text-gray-500 text-sm truncate'>{cuisines.join(", ")}</p>
        <p className='text-gray-500 text-sm mt-1'>{areaName}</p>
      </div>
    </div>
  )
}

export default ResturantCard
