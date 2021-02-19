import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Wrapper () {
    return (
        <div id="wrapper">
            <Sidebar />

        
		{/*<!-- Content Wrapper -->*/}
		<div id="content-wrapper" class="d-flex flex-column">

			{/*<!-- Main Content --> */}
			<div id="content">
                
                <Topbar />

            </div>

            <Footer />

        </div>




        </div>
    );
};