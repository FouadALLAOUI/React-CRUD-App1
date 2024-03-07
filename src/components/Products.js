import { faCheckCircle, faCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Products() {
  //const [products, setProducts] =useState([]);
  const [products, setProducts] =useState([]);
  
  useEffect(()=>{
    handleGetProducts();
  },[]);

  const handleGetProducts = ()=>{
    axios.get("http://localhost:9000/products")
    .then(resp=>{
      const products=resp.data;
      setProducts(products);
    })
    .catch(err=>{
      console.log(err);
    });
  }

  const handleDeleteProduct=(product)=>{
    const newProducts=products.filter(p => p.id!=product.id);
    setProducts(newProducts);
  }
  const handleCheckProduct=(product)=>{
    const newProducts=products.map(p => {
      if (p.id==product.id){p.checked = !p.checked;}
      return p
    });
    setProducts(newProducts);
  }

  return (
    <div className='p-1 m-1'>
      <div className='row'>
       <div className='col-md-6'>
       <div className='card'>
          <div className='card-body'>
            <table className='table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Checked</th>
                </tr>
              </thead>
              
              <tbody> 
                {
                  //JSX
                  products.map(product=>(
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>
                       <button onClick={()=>handleCheckProduct(product)} className='btn btn-outline-success'>
                          <FontAwesomeIcon icon={product.checked?faCheckCircle:faCircle}></FontAwesomeIcon>
                       </button>
                      </td>
                      <td>
                      <button onClick={()=>handleDeleteProduct(product)} 
                      className='btn btn-outline-danger'>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                      </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
       </div>
      </div>  
    </div>
  )
}