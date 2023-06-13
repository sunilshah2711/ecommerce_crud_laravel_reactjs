import React, { useState, useEffect } from "react";
import Header from "./Header";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const deleteOperation = async(id) =>{
    let result = await fetch(`http://127.0.0.1:8000/api/delete/${id}`,{
        method:'DELETE'
    });
    result=await result.json();
    console.log(result);
    getData();
  }

  const getData = async() => {
    let result = await fetch("http://127.0.0.1:8000/api/list");
      result = await result.json();
      setData(result);
  }

  console.log(data);
  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Product List</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <img style={{width:100}} src={`http://127.0.0.1:8000/${item.file_path}`} />
                  </td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td><span onClick={()=>{deleteOperation(item.id)}} className="delete">Delete</span></td>
                  <td><Link to={`update/${item.id}`}><span className="update">Update</span></Link></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AddProduct;
