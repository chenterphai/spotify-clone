'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaPlay } from 'react-icons/fa';

interface ListItemprops {
    image: string;
    name: string;
    href: string;
}

const ListItem: React.FC<ListItemprops> = ({
    image,
    name,
    href
}) => {

    const router = useRouter()

    const onClick = () => {
        // Add authentication before push
        router.push(href)
    }

    return (
        <button
            onClick={onClick}
            className='relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition-all pr-4'
        >
            <div className='
            relative min-h-[64px] min-w-[64px]
            '>
                <Image
                    src={image}
                    alt='Image'
                    fill
                    className='object-cover'
                />
            </div>
            <p className='font-medium truncate py-5'>
                {name}
            </p>
            <div className='absolute transition-all opacity-0 rounded-full flex justify-center items-center bg-green-500 p-3 drop-shadow-sm right-5 group-hover:opacity-100 hover:scale-110'>
                <FaPlay className='text-black' />
            </div>
        </button>
    )
}

export default ListItem