import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ContainerFluid from "./ContainerFluid";
import Footer from "./Footer";

export default function Wrapper () {
    return (
        <div id="wrapper">
            <Sidebar />

        
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">

                    {/*<!-- Main Content --> */}
                    <div id="content">
                        
                        <Topbar />
                        <ContainerFluid />

                    </div>

                <Footer />

            </div>




        </div>
    );
};