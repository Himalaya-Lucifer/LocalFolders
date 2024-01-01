import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postCource } from "../slice/PostCource.slice";
import { fetchCource } from "../slice/GetCource.slice";
import { updateCource } from "../slice/UpdateCource.slice";

export default function UpdateCource() {
  const nav = useNavigate();

  const [formv, setform] = useState({});
  const dis = useDispatch();

  const { id } = useParams();
   const { data, loading, error } = useSelector((state) => {
    console.log("This is.......................",state.cource_val);
    return state.cource_val;
  });

  useEffect(() => {
    console.log("fetching is complete");
    dis(fetchCource({ id }));
  }, []);

  useEffect(() => {
    if(data) {
      setform(data);
    }
  }, [data]);

  if (error) {
    return <div>error id comming</div>;
  }

  if (loading) {
    return <div>loading......</div>;
  }

  if (data && data.length === 0) {
    return <div>No record</div>;
  }

  const submitButton = (e) => {
    e.preventDefault();
    console.log(formv);
    dis(updateCource({id,formv}));
  };

  const changeH = (e) => {
    const { value, name } = e.target;
    setform({ ...formv, [name]: value });
    console.log("Something is changing..................................................")
    console.log(formv)
  };

  if (data) {
    return (
      <>
        <h1 className="id_coming">Submit Form</h1>
        <div className="form-wrap">
          <form onSubmit={submitButton}>
            <h1>Sign Up</h1>
            <input
              type="text"
              placeholder="Name"
              name="course_name"
              onChange={changeH}
              value={formv.course_name}
            ></input>
            <input
              type="text"
              placeholder="Title"
              name="course_title"
              onChange={changeH}
              value={formv.course_title}
            ></input>
            <input
              placeholder="Fee"
              name="course_fee"
              onChange={changeH}
              value={formv.course_fee}
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }

  return <h1>Error</h1>;
}
