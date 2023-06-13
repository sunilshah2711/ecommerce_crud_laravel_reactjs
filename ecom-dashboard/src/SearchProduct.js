import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Header from "./Header";

const SearchProduct = () => {
  const [data, setData] = useState([]);

  const search = async (key) => {
    if (key.length > 0) {
        let result = await fetch(`http://127.0.0.1:8000/api/search/${key}`);
        result = await result.json();
        console.log("result", result);
        setData(result);
    }
    if (key.length === 0) {
      setData([]);
    }
    console.log(key);
  };

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Search Product</h1>
        <input
          onChange={(e) => search(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Search Product"
        />
        <br />

        {data.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <img
                        style={{ width: 100 }}
                        src={`http://127.0.0.1:8000/${item.file_path}`}
                      />
                    </td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <h1>search product</h1>
        )}
      </div>
    </>
  );
};

export default SearchProduct;
