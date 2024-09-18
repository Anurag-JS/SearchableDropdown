import { useEffect, useState } from "react"


export default function Dropdown (){

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                let response = await fetch("https://jsonplaceholder.typicode.com/users");
                let result = await response.json();
                setData(result.toLowerCase());
                console.log(result);
            }catch(err){
                setError(err);
                console.log("Error",err)
            }finally{
                setIsLoading(false);
            }
        }
        fetchData()
    },[])

    if(isLoading){
        return <p><h2>Loading...</h2></p>
    }

    if(error){
        return <p><h2>{`Error - ${error}`}</h2></p>
    }

    const handleOnChange = (e) => {
        setSearchQuery(e.target.value);
    }



    return (
        <div>
            <input type="text" list="items" value={searchQuery} onChange={handleOnChange} placeholder={selectedItem || placeholder || "Select an Item"} />
            <datalist id="items">
                {data.map((item,index)=> <option key={index} value={item} />)}
            </datalist> 
        </div>
    )
}