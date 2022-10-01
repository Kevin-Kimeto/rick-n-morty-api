import React from 'react';

const Characters = ({ characters = [] }) => {
  return (
    <div className='px-48 py-6 h-auto grid grid-cols-5 gap-2'>
        {characters.map((item, index) => (
            <div key={index} className=''>
                <div className='w-[160px]'>
                    <img src={item.image} alt='' className='' />
                    <div className='flex flex-col justify-center text-center'>
                        <h4 className='text-sm'>{item.name}</h4>
                        <hr />
                        <p className='text-xs'>species: {item.species}</p>
                        <p className='text-xs'>location: {item.location.name}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Characters;