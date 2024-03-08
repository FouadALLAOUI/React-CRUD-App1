import React, { useEffect, useState } from 'react'
import { getProduct, saveProduct, updateProduct,  } from '../app/app';
import { json, useParams } from 'react-router-dom';
//Pay Attention : JSX != HTML+CSS
function EditProduct() {
  const {id} = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [checked, setChecked] = useState(false);
  
  useEffect(()=>{
    handleGetProductById(id);
  },[]);
  const handleGetProductById=(id) =>{
    getProduct(id).then(resp=>{
      let prod =resp.data;
      setName(prod.name);
      setChecked(prod.checked);
      setPrice(prod.price);
    });
  }  

  const handleUpdateProduct = (event) =>{
    event.preventDefault();
    let product = {id, name, price, checked};
    updateProduct(product).then((resp)=>{
      alert(JSON.stringify(resp.data));
    });
  }

  return (
    <div className='row p-1'>
      <div className='col-md-6'>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={handleUpdateProduct} >
              <div className='mb-3'>
                <label className='form-lable'>Name : </label>
                <input onChange={(e)=>setName(e.target.value)} 
                 value={name}//Tow way Binding
                className='form-controle'/>
              </div>
              <div className='mb-3'>
                <label className='form-lable'>Price : </label>
                <input onChange={(e)=>setPrice(e.target.value)} 
                 value={price}//Tow way Binding 
                 className='form-controle'></input>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" 
                onChange={(e)=>setChecked(e.target.value)} 
                 checked={checked}//Tow way Binding
                 />
                  <label className="form-check-label" for="flexCheckChecked">
                    Checked
                  </label>
              </div>
              <button className='btn btn-success'>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProduct