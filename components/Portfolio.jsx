import React from "react";
import Image from "next/legacy/image";

const Portfolio = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 text-center">
            <h1 className="font-bold text-2xl p-4">Travel Photos</h1>
            <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
                <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
                    <Image
                        src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                        alt="/"
                        width='677'
                        height='451'
                        layout="responsive"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                        alt="/"
                        width='215'
                        height='217'
                        layout="responsive"
                        style={'object-fit:cover'}
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                        alt="/"
                        width='215'
                        height='217'
                        layout="responsive"
                        style={'object-fit:cover'}
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                        alt="/"
                        width='215'
                        height='217'
                        layout="responsive"
                        style={'object-fit:cover'}
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                        alt="/"
                        width='215'
                        height='217'
                        layout="responsive"
                        style={'object-fit:cover'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;