import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postCource } from "../slice/PostCource.slice";

export default function CreateCource() {

    const nav = useNavigate();
  
    const [formv, setform] = useState({});
    const dis = useDispatch();
    
    const submitButton = (e) => {
        e.preventDefault();
        console.log(formv);
        dis(postCource(formv));
        nav('/cources');
    
      };

      const changeH = (e) => {
        const {value,name}=e.target;
        setform({...formv,[name]:value});
        console.log("submitted",);
    }
    
    return (
        
        <>
        <h1 className="id_coming">Submit Form</h1>
        <div className="form-wrap">
        <form onSubmit={submitButton}>
          <h1>Sign Up</h1>
          <input type="text" placeholder="Name" name="course_name" onChange={changeH}></input>
          <input type="text" placeholder="Title" name="course_title" onChange={changeH}></input>
          <input type="number" placeholder="Fee" name="course_fee" onChange={changeH}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
        </>
    )
}