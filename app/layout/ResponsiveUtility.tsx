import React from 'react';

const ResponsiveUtility = () => {
  return (
    <>
        <span className={'text-black'}>
            <span className='sm:invisible md:invisible lg:invisible xl:invisible 2xl:invisible'>-</span>
            <span className='invisible sm:visible md:invisible lg:invisible xl:invisible 2xl:invisible'>SM</span>
            <span className='invisible sm:invisible md:visible lg:invisible xl:invisible 2xl:invisible'>MD</span>
            <span className='invisible sm:invisible md:invisible lg:visible xl:invisible 2xl:invisible'>LG</span>
            <span className='invisible sm:invisible md:invisible lg:invisible xl:visible 2xl:invisible'>XL</span>
            <span className='invisible sm:invisible md:invisible lg:invisible xl:invisible 2xl:visible'>2XL</span>
        </span>
    </>
  );
};

export default ResponsiveUtility;
