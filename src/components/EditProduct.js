import React, { useState } from 'react'
import { saveProduct } from '../app/app';
import { json } from 'react-router-dom';
//Pay Attention : JSX != HTML+CSS
function EditProduct() {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [checked, setChecked] = useState(false);
  
  const handleSaveProduct = (event) =>{
    event.preventDefault();
    let product = {name, price, checked};
    saveProduct(product).then((resp)=>{
      alert(JSON.stringify(resp.data));
    });
  }

  return (
    <div className='row p-1'>
      <div className='col-md-6'>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={handleSaveProduct} >
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