import { faCheckCircle, faCircle, faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AppContext, checkProduct, deleteProduct, getProducts } from "../app/app";
import SearchForm from './SearchForm';

export default function Products() {
  //const [products, setProducts] =useState([]);

  const navigate = useNavigate();
  const [state, setState] = useContext(AppContext);
  useEffect(() => {
    handleGetProducts(state.keyword, state.currentPage, state.pageSize);
  }, []);

  const handleGetProducts = (keyword, page, size) => {
    getProducts(keyword, page, size).then(resp => {
      const totalElements = resp.headers["x-total-count"];
      console.log(totalElements);
      let totalPages = Math.floor(totalElements / size);
      if (totalElements % size != 0) ++totalPages;
      console.log(totalPages);
      setState({
        products: resp.data,
        keyword: keyword,
        currentPage: page,
        pageSize: size,
        totalPages: totalPages
      });
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleDeleteProduct = (product) => {
    deleteProduct(product).then((resp) => {
      //handleGetProducts();
      const newProducts = state.products.filter(p => p.id != product.id);
      setState({ ...state, products: newProducts });
    });
  };

  const handleCheckProduct = (product) => {
    checkProduct(product).then((resp) => {
      const newProducts = state.products.map(p => {
        if (p.id == product.id) { p.checked = !p.checked; }
        return p
      });
      setState({ ...state, products: newProducts });
    });
  }

  const handleGotoPage = (page) => {
    handleGetProducts(state.keyword, page, state.pageSize)
  }

  return (
    <div className='p-1 m-1'>
      <div className='row'>
        <div className='col-md-6'>
        <div className='card m-2'>
          <div className='card-body'>
            <SearchForm handleGetProducts={handleGetProducts}></SearchForm>
            </div>
            <div className='card-body'>
          </div>
        </div>
          <div className='card m-2'>
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
                  { //JSX
                    state.products.map(product => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>
                          <button onClick={() => handleCheckProduct(product)} className='btn btn-outline-success'>
                            <FontAwesomeIcon icon={product.checked ? faCheckCircle : faCircle}></FontAwesomeIcon>
                          </button>
                        </td>
                        <td>
                          <button onClick={() => handleDeleteProduct(product)}
                            className='btn btn-outline-danger'>
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                          </button>
                        </td>
                        <td>
                          <button onClick={()=>navigate(`/editProduct/${product.id}`)} 
                            className='btn btn-outline-success'
                          >
                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <ul className="nav nav-pills">
                {state.totalPages > 0 && (
                  <ul className="nav nav-pills">
                    {(new Array(state.totalPages).fill(0)).map((v, index) => (
                      <li key={index +1}>
                        <button 
                        onClick={() => handleGotoPage(index + 1)} 
                        className={(index+1)==state.currentPage?'btn btn-info ms-1':'btn btn-outline-info ms-1'}
                      >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
