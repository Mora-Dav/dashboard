import { useEffect, useState } from 'react';
import ButtonCategory from './ButtonCategory';


export default function DBCategories() {
    
    const [categories, setCategory] = useState([]);

    useEffect(()=> {
        fetch ('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(data => {setCategory(data.meta.categorias)
        })
    },[]);



    return (
        <>
             {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4">
                <div className="card-header py-3">
                    <div className="card shadow mb-4">
                        <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                        <div className="card-body">
                            <div className="row">

                                {
                                    categories.map((category, i) => <ButtonCategory categoryName={category.name} key={i} />)
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </>
    )
}