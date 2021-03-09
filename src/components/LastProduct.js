import { useEffect, useState } from 'react';


export default function LastProduct(){

    const [products, setProduct] = useState(null);
    const [detailProduct, setDetailProduct]= useState([]);

    

    useEffect(()=> {
        fetch ('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(data =>{setProduct(data)
        })  
    },[]);


    useEffect(()=>{
        if (!products){
            return
        }
        fetch( "http://localhost:3000/api/products/" + products.meta.lastProduct.id)
        .then(res => res.json())
        .then(data =>{setDetailProduct(data)
        })
    },[products])

    console.log(detailProduct)

    

    console.log(products)
    console.log(detailProduct.urlImage)

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
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src={detailProduct.urlImage} alt="product"></img>
                            </div>
                            <h6>{detailProduct.name}</h6>
                            <p>{detailProduct.description}</p>
                            <a target="_blank" rel="noreferrer" href={"http://localhost:3000/product/"+detailProduct.id+"/detail"}>View product detail</a>
                        </div>
                    </div>

        
            }

        </>
    )
}