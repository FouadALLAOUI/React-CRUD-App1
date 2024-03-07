import React from 'react'

function NewProduct() {
  return (
    <div className='row p-1'>
      <div className='col-md-6'>
        <div className='card'>
          <div className='card-body'>
            <form >
              <div className='mb-3'>
                <label className='form-lable'>Name : </label>
                <input className='form-controle'></input>
              </div>
              <div className='mb-3'>
                <label className='form-lable'>Price : </label>
                <input className='form-controle'></input>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox"/>
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