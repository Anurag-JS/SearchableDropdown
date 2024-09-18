import { useEffect, useState } from "react"


export default function Dropdown (){

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                let response = await fetch("https://jsonplaceholder.typicode.com/users");
                let result = await response.json();
                setData(result);
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

    return (
        <div>
            {String(data)}
        </div>
    )
}