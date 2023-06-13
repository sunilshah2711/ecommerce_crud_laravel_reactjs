import { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from 'react-router-dom';

const UpdateProduct = (props) => {
    const[name,setName]=useState("");
    const[file,setFile]=useState("");
    const[price,setPrice]=useState("");
    const[description,setDescription]=useState("");
    const[data,setData]=useState([]);
    let { id } = useParams();
    useEffect(()=>{
        metch();
    },[])
    console.log(props);
    const metch = async () =>{
        let result = await fetch(`http://127.0.0.1:8000/api/product/${id}`);
        result= await result.json();
        setData(result);
        setName(result.name);
        setPrice(result.price);
        setDescription(result.description);
        setFile(result.file_path);

    }
    const editProduct = async (id) =>{
        const formData = new FormData();
        formData.append('file', file);
        formData.append('price', price);
        formData.append('name', name);
        formData.append('description', description);
        console.log(formData)
        let result = await fetch(`http://127.0.0.1:8000/api/updateproduct/${id}?_method=PUT`,{
            method: 'POST',
            body: formData
        });
        metch();
        console.log(name, file, description, price)

        // alert("Data has been saved")
    }
    return(
        <>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
                <h1>UpdateProduct</h1>
                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} defaultValue={data.name}/><br/>
                <input type="text" className="form-control" onChange={(e)=>setPrice(e.target.value)} defaultValue={data.price}/><br/>
                <input type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)} defaultValue={data.description}/><br/>
                <input type="file" className="form-control" onChange={(e)=>setFile(e.target.files[0])} defaultValue={data.file_path}/><br/>
                <img style={{width:140}} src={`http://127.0.0.1:8000/${data.file_path}`}/> 
                <button onClick={() => editProduct(data.id)}>update</button>
            </div>
        </>
    )
}

export default UpdateProduct;