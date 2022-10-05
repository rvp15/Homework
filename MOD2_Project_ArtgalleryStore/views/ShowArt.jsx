const React = require('react')
const DefaultLayout = require("./layouts/DefaultLayout");

class ShowArt extends React.Component{
    render(){
        const {aart} = this.props
        // console.log(`Show Page ${aart}`)
        return(
            <DefaultLayout title='Art Details' nav='arts'>
                <div>
                    <h1>Details of {aart.title}</h1>
                     
                    <p>Artist: {aart.artist}</p>
                    <p>Price: ${aart.price}</p>
                    <p>Count:{aart.count}</p>
                    <p>Description: { aart.description}</p>

                    {aart.image && aart.imageFullname && (
                    <img
                      src={`/uploads/images/${aart.imageFullname}`}
                      alt={aart.image}
                      className="showart-image"
                    ></img>
                  )}
                    
                    <div>
                      <button><a href={`/arts/${aart._id}/edit`}>Edit</a></button>

                      <form action={`/arts/${aart._id}?_method=DELETE`} method='POST'>
                        <button value='Delete'>Delete</button>
                      </form>

                      <button><a href={`/arts/collection`}>Back</a></button>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}
module.exports = ShowArt