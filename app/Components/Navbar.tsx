import Image from "next/image";
import { FaSearchengin } from "react-icons/fa";
import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <div className=' relative overflow-hidden'>
            <Image src={'/bgmountain.jpg'} alt="" height={10000} width={5000} className=" left-0 top-0 -z-40 min-h-full h-auto absolute w-full" />
            <div className=" p-2 max-sm:py-4 sm:p-5 md:p-10 h-full w-full bg-gradient-to-b from-transparent from-50% to-black">
                <div className=' flex justify-between items-center'>
                    <p className=' text-3xl text-white font-bold'>Yandex</p>
                    <div className=' flex gap-3'>
                        <Link href={'#'} className=' sm:px-4 px-2 py-1 sm:py-2 rounded-lg bg-white text-black '>Register</Link>
                        <Link href={'#'} className=' sm:px-4 px-2 py-1 sm:py-2 rounded-lg text-black bg-yellow-500/90'>Login</Link>
                    </div>
                </div>
                <div className=" my-20 flex flex-col  gap-3 justify-center items-center">
                    <form className=" flex gap-3 w-full max-md:mx-5 md:w-7/12 justify-between items-center rounded-lg overflow-hidden border-2 bg-yellow-400 border-yellow-400">
                        <input type="text" className=" w-full px-3 py-2 outline-none font-semibold" />
                        <button type="submit" className=" bg-yellow-400 text-white pr-2 h-full w-fit justify-center flex items-center "> <FaSearchengin size={30} /></button>
                    </form>
                    <div className=" text-gray-200  flex gap-2 md:gap-5">
                        <Link href={'#'} className=" hover:text-white tshadow">Home</Link>
                        <Link href={'#'} className=" hover:text-white tshadow">Images</Link>
                        <Link href={'#'} className=" hover:text-white tshadow">Web</Link>
                        <Link href={'#'} className=" hover:text-white tshadow">Maps</Link>
                        <Link href={'#'} className=" hover:text-white tshadow">Translate</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar