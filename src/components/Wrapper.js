import {useEffect, useState} from 'react';

import Footer from './Footer';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import DBCategories from './DBCategories'
import Product from './Product';



export default function Wrapper () {

    const [products, setProduct] = useState([]);
    const [users, setUser] = useState([]);
    const [categories, setCategory] = useState([]);
    

    useEffect(()=> {
        fetch ("http://localhost:3000/api/products/")
        .then (res => res.json())
        .then (data => {setProduct(data.data)})
        
       // fetch ("http://localhost:3000/api/products/")
        //.then (res => res.json())
        //.then (data => {setCategory((data.meta).data)})

        fetch ("http://localhost:3000/api/users/")
        .then (res => res.json())
        .then (data => {setUser(data)});

    
    },[]);

    useEffect(()=> {
        setCategory(products.meta)
    },[products])


    //console.log('Productos=' + products);

    

    console.log ('Categorias = '+ categories)


    //console.log ('Estos son los usuarios = ' + users);

    

    return (
    <>
    <div id="wrapper">

        {/*<!-- Sidebar -->*/}
        <Sidebar />
        {/*<!-- End of Sidebar -->*/}

        
        {/*<!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">

            {/*<!-- Main Content -->*/}
            <div id="content">

                {/*<!-- Topbar -->*/}
                <Topbar />
                {/*<!-- End of Topbar -->*/}

                {/*<!-- Begin Page Content -->*/}
                <div className="container-fluid">

                    {/*<!-- Page Heading -->*/}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>

                    {/*<!-- Content Row -->*/}
                    <div className="row">

                        {/*<!-- Amount of Products in DB -->*/}
                        <div className="col-md-4 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Products in Data Base</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">135</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<!-- $$$ of all products in DB -->*/}
                        <div className="col-md-4 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Amount in products</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">$546.456</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<!-- Amount of users in DB -->*/}
                        <div className="col-md-4 mb-4">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity
                                            </div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">38</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-user-check fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<!-- Content Row -->*/}
                    <div className="row">
                        {/*<!-- Last Product in DB -->*/}
                        {
            {products}.length === 0

            ?
            
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="visually-hidden">Loading...</span>
            </button>
            
        
            :

            products.map((product,i) => (
                <Product products={products} key={i} />

            ))

            
            }
        
                    
                       

                        {/*<!-- Categories in DB -->*/}
                        <div className="col-lg-6 mb-4">						
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <DBCategories />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- /.container-fluid -->*/}
            </div>
            {/*<!-- End of Main Content -->*/}

            {/*<!-- Footer -->*/}
            <Footer />
            
            {/*<!-- End of Footer -->*/}

        </div>
        {/*<!-- End of Content Wrapper -->*/}

    </div>
    {/*<!-- End of Page Wrapper -->*/}
    </>
    )
}
