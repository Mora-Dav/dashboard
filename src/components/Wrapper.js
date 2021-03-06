import {useEffect, useState} from 'react';

import Footer from './Footer';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import DBCategories from './DBCategories'
import LastProduct from './LastProduct';
import InfoCard from './InfoCard';


export default function Wrapper () {
{
    const [products, setProduct] = useState([]);
    const [users, setUser] = useState([]);

    

    useEffect(()=> {
        fetch ("https://freshmarket-grupo9.herokuapp.com/api/products/")
        .then (res => res.json())
        .then (data => {setProduct(data.data)})
        
      

        fetch ("https://freshmarket-grupo9.herokuapp.com/api/users/")
        .then (res => res.json())
        .then (data => {setUser(data)});

    
    },[]);




    console.log('Productos=' + products);


    console.log ('Estos son los usuarios = ' + users);

}

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
                        <InfoCard />
                    </div>
                    {/*<!-- Content Row -->*/}
                    <div className="row">
                        {/*<!-- Last Product in DB -->*/}
                        
          

            
                            <LastProduct  />

        

            
                        </div>
        
                    
                       

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
