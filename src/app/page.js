'use client'
import Image from 'next/image'

import data from '@/data.json'
import FriendsCard from './components/FriendsCard'
import { useState } from 'react'

export default function Home() {
  const [searchQuery , setSearchQuery]=useState('')
  // console.log("Current Search Query:", searchQuery)
  
  const searchData=data.filter((item) => item.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()))

    return (
      <div className='container py-[60px] '>
        <div className=" ml-[20px] my-[20px] ">
            <input
                type='text'
                placeholder='Search'
            className='border-2 border-gray-200 p-2 rounded-2xl max-w-[400px] w-full'
            onChange={(e) => setSearchQuery(e.target.value) }
          />
          </div>

            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   '>
                {searchData.map((data) => (
                    <FriendsCard data={data} key={data.id}></FriendsCard>
                ))}
            </div>
        </div>
    )
}
