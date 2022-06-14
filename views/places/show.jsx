const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={data.place.pic} alt={data.place.name} />
            <div>
                <h2>Rating</h2>
                <p>not rated</p>
            </div>
            <div>
                <h2>Description</h2>
                <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines} from {data.place.yearFounded}</p>
            </div>
            <div>
                <h2>Comments</h2>
                <p>no comments yet</p>
            </div>
          </main>

          <a href="/places" className="btn btn-secondary">Go Home</a>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>  
<form method="POST" action={`/places/${data.id}?_method=DELETE`}>  
<button type="submit" className="btn btn-danger">Delete</button>
</form>     

        </Def>
    )
}


module.exports = show
