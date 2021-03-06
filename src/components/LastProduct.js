import product_dummy from '../product_dummy.svg';
import { useEffect, useState } from 'react';


export default function LastProduct(){

    const [products, setProduct] = useState(null);
    const [DetailProduct, setDetailProduct]= useState([]);

    

    useEffect(()=> {
        fetch ('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(data =>{setProduct(data)
        
        })
        
    },[]);

<<<<<<< HEAD
  /*  useEffect(()=>{
        console.log(products)
        fetch( "http://localhost:3000/api/products/"+products.meta.lastProduct.id)
=======
    useEffect(()=>{
        if (!products){
            return
        }
        fetch( "http://localhost:3000/api/products/" + products.meta.lastProduct.id)
>>>>>>> 061a2871474806199b2512f1a3b2f9865336b252
        .then(res => res.json())
        .then(data =>{setDetailProduct(data)
        })
    },[products])

    console.log(DetailProduct)

    

    console.log(products)
    */

    return (
        <>
                    {/*<!-- Last Product in DB -->*/ }
            {
                !products
                ?

                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>

                    :


                    < div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                            <div className="text-center">
                            </div>
                            <div className="card-body">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src={product_dummy} alt="product"></img>
                            </div>
                          {/*}  <h6>{products.meta.lastProduct.name}</h6>
                            <p>{products.meta.lastProduct.description}</p>
                            <a target="_blank" rel="nofollow" href="/">View product detail</a>*/}
                        </div>
                    <p>{products.meta.total}</p>
                    </div>

        
            }

        </>
    )
}