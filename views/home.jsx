const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                  <img src='/images/icecream.avif' alt='Ice Cream Cone' />
              </div>
              <div>
                  Photo by <a href="https://unsplash.com/@sadswim">ian dooley</a> on <a href="https://unsplash.com/photos/TLD6iCOlyb0">Unsplash</a>
              </div>
              <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
          </main>
      </Def>
    )
  }

  

  

module.exports = home
