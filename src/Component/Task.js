import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const Task = () => {
  const [users, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const result = await axios.get("http://localhost:3000/posts");
    setPosts(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    loadPosts();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1> Task</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <Table striped bordered hover variant="dark"></Table>
            <tr>
              <th scope="col">UserId</th>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                {/* <th scope="row">{index + 1}</th> */}
                <td>{user.updatedAt}</td>
                <td>{user.id}</td>
                <td>{user.title}</td>
               


               
                <td>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link class="btn btn-primary mr-4" to="/adduser">
          Add Task
        </Link>
      </div>
    </div>
  );
};

export default Task;
