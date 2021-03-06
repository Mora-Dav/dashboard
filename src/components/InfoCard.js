import { useEffect, useState } from "react";

export default function InfoCard(){

    const [meta, setMeta] = useState([]);
    const [users, setUsers] = useState([])

    useEffect(()=> {
        fetch ("http://localhost:3000/api/products")
        .then (res => res.json())
        .then (data =>{setMeta(data.meta)})

        fetch ("https://freshmarket-grupo9.herokuapp.com/api/users/")
        .then (res => res.json())
        .then (data => {setUsers(data.meta)})

    },[])

    return (
        <>
                        {/*<!-- Amount of Products in DB -->*/}
                        <div className="col-md-4 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Products in Data Base</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{meta.count}</div>
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
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">${meta.total}</div>
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
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{users.count}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-user-check fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
        </>
    )
}