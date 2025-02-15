import React from 'react'
import Image from 'next/image'
const Sec5 = () => {
  return (
    <div>
        <div className='h-[709px] w-[100%] flex justify-center items-center bg-[#043873]'>
                <div className='w-[90%] text-[#ffffff]'>
                    <h1 className='text-start md:text-center text-[40px] md:text-[62px] font-bold '>Try Whitepace <br /> today</h1>
                    <div className='flex justify-center items-start md:items-center flex-col mt-3'>
                    <p className='text-start md:text-center font-normal text-[24px]'>Get started for free.</p>
                    <p className='text-start md:text-center font-normal text-[24px]'>Add your whole team as your needs grow.</p>
                    </div>
                    <div className='flex justify-start md:justify-center items-start md:items-center'>
                    <button className='flex justify-center gap-10 items-center font-medium  px-[40px] py-[20px] rounded-lg bg-[#4F9CF9] text-white my-10 '>Try Taskey free
                        <Image
                        src='/VectorR.svg'
                        alt='VectorR'
                        width={7}
                        height={7}
                        />
                    </button>
                    </div>
                    <div className='flex justify-start items-start md:justify-center md:items-center flex-col '>
                    <p className='text-center font-normal text-[24px] '>On a big team? Contact sales</p>
                    </div>
                    <div className='flex justify-start items-start md:justify-center md:items-center gap-[40px] mt-10 '>
                    <Image
                    src='/Apple.png'
                    alt='Apple'
                    width={50}
                    height={50}
                    />
                    <Image
                    src='/Android.png'
                    alt='Apple'
                    width={50}
                    height={50}
                    />
                    <Image
                    src='/Window.png'
                    alt='Apple'
                    width={50}
                    height={50}
                    />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Sec5