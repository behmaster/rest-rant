const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                  <img src='/images/cute.avif' alt='Cute Animal' />
              </div>
              <div>
                  Photo by <a href="https://unsplash.com/@sweetmangostudios">Ricky Kharawala</a> on <a href="https://unsplash.com/photos/adK3Vu70DEQ">Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
