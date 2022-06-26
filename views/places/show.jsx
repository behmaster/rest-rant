const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
          No comments yet!
        </h3>
      )
      if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
                Located in {data.place.city}, {data.place.state}
            </h3>
            <div>
                <h2>Rating</h2>
                <p>not rated</p>
            </div>
            <div>
                <h2>Description</h2>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <p>serving {data.place.cuisines}</p>
            </div>
            <div>
                <h2>Comments</h2>
                {comments}
                <h2>Leave a Review</h2>
            <form action={`/places/${data.place.id}/comment`} method="POST">
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="content">Content</label>
                  <textarea id="content" name="content"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="stars">Star Rating</label>
                  <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="rant">Rant?</label>
                  <input type="checkbox" id="rant" name="rant" />
                </div>
              </div>
              <input type="submit" className="btn btn-primary" value="Add Comment" />
            </form>
            </div>
          </main>
        <div>
          <a href="/places" className="btn btn-secondary">Go Home</a>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>  
            <button type="submit" className="btn btn-danger">Delete</button>
            </form>
            </div>     
        </Def>
    )
}


module.exports = show
