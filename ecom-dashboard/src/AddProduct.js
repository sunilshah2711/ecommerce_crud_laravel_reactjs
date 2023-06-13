import { useState } from "react";
import Header from "./Header";

const AddProduct = () => {
    const[name,setName]=useState("");
    const[file,setFile]=useState("");
    const[price,setPrice]=useState("");
    const[description,setDescription]=useState("");
    const addProduct = async () => {
        console.log(name,file,price,description);
        const formData = new FormData();
        formData.append('file',file);
        formData.append('price',price);
        formData.append('name',name);
        formData.append('description',description);
        let result = await fetch("http://127.0.0.1:8000/api/addProduct",{
            method:'POST',
            body: formData
        });
        alert("Data has been saved")
    }
    return(
        <>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
                <h1>AddProduct</h1>
                <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/><br/>
                <input type="file" onChange={(e)=>setFile(e.target.files[0])} className="form-control" placeholder="file"/><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="price"/><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="description"/><br/>
                <button onClick={addProduct}>Add Product</button>
            </div>
        </>
    )
}

export default AddProduct;