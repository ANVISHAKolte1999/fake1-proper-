import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    id: "",
    title: "",  
    completed: "",
    
  });

  const { name, id, title, completed,} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("  http://localhost:3000/posts", user);
    history.push("/Task");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Userid"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Id"
             name="id"
              value={id}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Completed"
              name="completed"
              value={completed}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br></br>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;