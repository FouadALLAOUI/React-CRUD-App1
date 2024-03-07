import React, { useState } from 'react'
//Pay Attention : JSX != HTML+CSS
function NewProduct() {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [checked, setChecked] = useState(false);
  
  return (
    <div className='row p-1'>
      <div className='col-md-6'>
        <div className='card'>
          <div className='card-body'>
            <form >
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

export default NewProduct