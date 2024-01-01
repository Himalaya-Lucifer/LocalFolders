import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { fetchCource } from "../slice/GetCource.slice";

export default function Cource() {
    
    const {id} = useParams();
    console.log("This is id in page",id);
    const {data,loading,error} = useSelector((state) => {
        console.log("This is only one id",state);
        return state.cource_val;
    });

    console.log(data)

    const dis = useDispatch();
    useEffect(()=> {
        dis(fetchCource({id,"ss":"pp"}))
    },[])

    if(error) {
        return <div>error id comming</div>
    }

    if(loading) {
        return <div>loading......</div>
    } 

    if(data && data.length === 0) {
        return <div>No record</div>

    } 
    
    return (
        <>
         {data &&
         <table style={{border:"2px solid black"}}>
            <thead style={{border:"2px solid black"}}>
            <tr style={{border:"2px solid black"}}>
                <th style={{border:"2px solid black"}}>Name</th>
                <th style={{border:"2px solid black"}}>title</th>
                <th style={{border:"2px solid black"}}>Fee</th>
                <th style={{border:"2px solid black"}}>Action</th>
            </tr>
            </thead>
            <tbody style={{border:"2px solid black"}}>
            <tr style={{border:"2px solid black"}}>
            <td style={{border:"2px solid black"}}>{data.course_name}</td>
            <td style={{border:"2px solid black"}}>{data.course_title}</td>
            <td style={{border:"2px solid black"}}>{data.course_fee}</td>
            <td style={{border:"2px solid black"}}><Link to={`/update-cource/${data.id}`}>Update</Link></td>

            </tr>
            </tbody>
        </table>
        }
        </>
    )
}