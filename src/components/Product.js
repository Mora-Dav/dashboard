/*import product_dummy from '../product_dummy.svg';
import {useState} from 'react';



export default function Product () {
    const [lastProduct,setLastProduct] = useState([]);

    fetch ("https://freshmarket-grupo9.herokuapp.com/api/products/")
        .then(res => res.json())
        .then(data =>{setLastProduct(data.meta.lastProduct)})
    
        
    
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Last product in Database</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src={product_dummy} alt="product"></img>
                        </div>
                        {/*<h6>{lastProduct.name}</h6>
                        <p>{lastProduct.description}</p> }
                        <a target="_blank" rel="nofollow" href="/">View product detail</a>
                    </div>
                </div>
            </div>
            
          
        
    )
        
        
       }
    */