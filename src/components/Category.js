export default function Category ({category, i}){
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    {category} {i}
                </div>
            </div>
        </div>
      
    )
};
