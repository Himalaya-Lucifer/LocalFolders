import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCources } from "../slice/GetCources.slice";
import { Link } from "react-router-dom";

const getRows = (data) => {
    return data.map((row) => {
       return (
        <tr key={row.id}>
            <td><Link to={`/cources/${row.id}`}>{row.course_name}</Link></td>
            <td>{row.course_title}</td>
            <td>{row.course_fee}</td>
            <td style={{border:"2px solid black"}}><Link to={`/update-cource/${row.id}`}>Update</Link></td>
        </tr>
       )
    });
} 


export default function AllCources () {
    
    const {data,loading,error} = useSelector((state) => {
        console.log("State is sbout to come",state)
        return state.cources_val;
    })

    console.log("this is data",data);

    const dis = useDispatch();
    useEffect(()=> {
        console.log(`I am inside useeffect call it.....=====================================`);
        dis(fetchCources())
        
    },[]);

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
            <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>title</th>
                <th>Fee</th>
            </tr>
            </thead>
            <tbody>{data && getRows(data)}</tbody>
        </table>

        </>
    );
}