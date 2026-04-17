
import data from "@/data.json"

const DetailsPage=async ({params}) => {
    const {id}=await params;
    
    const friend=data.find(id => data.id == id )  
    
    
    return (
        <div>
           <h1>{id}</h1> 
        </div>
    );
};

export default DetailsPage;