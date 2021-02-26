export default function DBCategories () {
    return (
        <>
        <Category categoria= "Categoria 1" />
        <Category categoria= "Categoria 2" />
        <Category categoria= "Categoria 3" />
        <Category categoria= "Categoria 4" />
        <Category categoria= "Categoria 5" />
        <Category categoria= "Categoria 6" />

        

        
        </>
    )
}

function Category ({categoria}){
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    {categoria}
                </div>
            </div>
        </div>
      
    )
}