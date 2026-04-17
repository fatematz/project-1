import Link from "next/link";

const FriendsCard=({data}) => {
    
    const {id, name, bio}=data;

    return (
        <div className="border-2 p-4 m-4  ">
            <h1 className="text-xl md:text-2xl"> {name} </h1>
            <p> {bio} </p>

            <Link href={`/friendsData/${id}`} className="btn mt-2">Details</Link>
        </div>
    );
};

export default FriendsCard;