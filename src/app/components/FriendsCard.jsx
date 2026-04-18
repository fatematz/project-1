

import Link from 'next/link'

const FriendsCard = ({ data }) => {
    const { id, name, bio, picture } = data

    return (
        <div className=' p-5 m-4 space-y-[10px] text-center shadow-2xl rounded-2xl'>
            <div className='flex justify-center '>
                <img className="rounded-full" src={picture} alt='' />
            </div>

            <div className=''>
                <h1 className='text-xl md:text-2xl'> {name} </h1>
            </div>

            <div className=''>
                <p> {bio} </p>
            </div>

            <Link href={`/friendsData/${id}`} className='btn mt-2 bg-[#2c3e50] text-white'>
                Details
            </Link>
        </div>
    )
}

export default FriendsCard
