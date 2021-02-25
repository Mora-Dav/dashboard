import product_dummy from '../product_dummy.svg';
import { useEffect, useState } from 'react';


export default function LastProduct(){

    const [products, setProduct] = useState([]);
    let lastProduct = {}

    useEffect(()=> {
        fetch ('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(data =>{setProduct(data.data)
        })
    },[]);

    console.log(products.length)
    console.log(products)
    lastProduct = products[products.length-1]

    console.log(lastProduct)

    return (
        <>
             {/*<!-- Last Product in DB -->*/}
        
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                                <div className="text-center">
                            </div>
                            <div className="card-body">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={product_dummy} alt="product"></img>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                                <a target="_blank" rel="nofollow" href="/">View product detail</a>
                            </div>
                        </div>
        


        </>
    )
}