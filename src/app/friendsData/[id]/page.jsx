import data from "@/data.json"
import { Bell, Archive, Trash2 } from "lucide-react";

const DetailsPage=async ({params}) => {
    const {id}=await params;
    
    const friend=data.find(data => data.id == id )  
    
    let colorData="border-gray-300"
    
    if(friend.status==="overdue") {
        colorData = "bg-red-400 text-white"
    } else if(friend.status === "almost due" ){
        colorData = "bg-blue-400 text-white"
    } else if(friend.status==="on-track") {
        colorData = "bg-purple-400 text-white"
    }

    
    return (
          <div className=" container ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-[20px] md:mx-[20px] lg:mx-[20px ] xl:mx-0 gap-[24px] py-[60px]">
            <div className='flex flex-col gap-6 '>
                <div className='bg-gray-100 p-4 rounded-xl text-center space-y-4'>
                    <div className='flex justify-center '>
                        <img
                            className='rounded-full w-[100px] h-[100px] '
                            src={friend.picture}
                            alt=''
                        />
                    </div>

                    <div className=''>
                        <h1 className="text-[20px] font-semibold"> {friend.name} </h1>
                    </div>

                    <div className='flex justify-center '>
                         <p className={`px-4 py-1  rounded-full text-[13px] font-semibold capitalize w-[200px] shadow-sm ${colorData} `}> {friend.status} </p>
                    </div>

                     <div className=' flex justify-center flex-wrap gap-1 '>
                        <p className="bg-green-300 px-3 rounded-full  text-[18px]">{friend.tags[0]}</p>
                        <p className="bg-green-300 px-3 rounded-full  text-[18px]">{friend.tags[1]}</p>
                    </div>

                    <div className='text-[#64748B] italic'>{friend.bio}</div>
                    <div className='text-[#64748B] flex justify-center flex-wrap gap-2 '>
                       <div className="italic">
                            Preferred:
                            </div>
                    <span className="text-black ">
                            {friend.email}
                            </span>
                    </div>
                </div>
                <div className="grid grid-cols-1  gap-6">
                    <div className="bg-gray-100 p-4 rounded-xl flex gap-2 items-center justify-center ">
                       <Bell size={20} /> Snooze 2 weeks
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl flex gap-2 items-center justify-center">
                       <Archive size={20} /> Archive
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl flex gap-2 items-center justify-center text-red-500">
                      <Trash2 size={20} />  Delete
                    </div>
                </div>
            </div>

            
            <div className="">
                <div className="space-y-10">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-xl text-center">
                        <h2 className="text-xl font-bold"> {friend.days_since_contact} </h2>
                            <p className="text-sm text-gray-500">
                                
                            Days Since Contact
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-xl text-center">
                        <h2 className="text-xl font-bold">{friend.goal}</h2>
                        <p className="text-sm text-gray-500">
                            Goal (Days)
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-xl text-center">
                        <h2 className="text-xl font-bold">
                            {friend.next_due_date}
                        </h2>
                        <p className="text-sm text-gray-500">
                            Next Due
                        </p>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl  ">
                    <div className="flex justify-between flex-wrap gap-2 items-center">
                        <h3 className="font-semibold">
                            Relationship Goal
                        </h3>
                        <button className="text-sm border px-2 py-1 rounded">
                            Edit
                        </button>
                    </div>

                    <p className="mt-2 text-sm">
                        Connect every <strong>{friend.days_since_contact} days</strong>
                    </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl">
                    <h3 className="font-semibold mb-4">
                        Quick Check-In
                    </h3>

                    {/* <CheckInSection friendName={friend.name} /> */}
                        
                        
                </div>

            </div>
        </div>
        </div>
        </div>
    );
};

export default DetailsPage;