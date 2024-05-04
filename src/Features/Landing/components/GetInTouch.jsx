import React from 'react'
import { Input, Button } from '@material-tailwind/react';

function GetInTouch() {
  return (
    <div className=''>
        <div className=' mx-auto max-w-5xl bg-gradient-to-tl from-tangerine via-tangerine to-daffodil py-12 rounded-lg my-12 shadow-lg '>
            <header className=' text-center text-4xl text-white'> Get in Touch! </header>
            <p className=' text-center text-sm text-white'> Subscribe to get in touch and enjoy discounts, promos and much more! </p>

            <div className=' flex gap-3 mt-6 max-w-2xl mx-auto '>
                <Input color='white'  size='lg' label='Enter your email' className='' /> 

                <Button variant='gradient' color='white'> Subscribe </Button>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch