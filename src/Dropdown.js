import { useEffect } from "react"


export default function Dropdown (){

    const [data, setData] = useState(null);
    const [isLoading, setIs]

    useEffect(()=>{
        const fetchData = async () => {
            try{
                let response = await fetch("https://jsonplaceholder.typicode.com/users");
                let result = await response.json();
                console.log(result);
            }catch(err){
                console.log("Error",err)
            }
        }
        fetchData()
    },[])

    return (
        <div>
            
            haka
        </div>
    )
}