import Card from './Card';
import DBCategories from './DBCategories';
import LastProduct from './LastProduct';

export default function ContainerFluid () {
    return (
        <>
            {/*<!-- Begin Page Content -->*/}
			<div className="container-fluid">

                {/*<!-- Page Heading -->*/}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>

                {/*<!-- Content Row -->*/}
                <div className="row">
                    <Card />

                 
                </div>

                {/*<!-- Content Row -->*/}
                <div className="row">
                    {/*<!-- Last Product in DB -->*/}
                    <div className="col-lg-6 mb-4">
                        
                        <LastProduct />
                    </div>

                    {/*<!-- Categories in DB -->*/}
                  
                    <DBCategories />

                </div>
            </div>
            {/*<!-- /.container-fluid -->*/}
        </>
    )
}