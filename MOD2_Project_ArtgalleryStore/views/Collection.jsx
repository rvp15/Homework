const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class Index extends React.Component {
  render() {
    const { arts } = this.props;
    console.log(arts);
    return (
      <DefaultLayout title="Home Page" nav="arts">
        <div className="collectioncontainer">
          
            {arts.map((art) => {
              return (
              
                  <div key={art._id}>
                {art.image && art.imageFullname && (
                    <img
                      src={`/uploads/images/${art.imageFullname}`}
                      alt={art.image}
                      className="collection-image"
                    ></img>
                  )} <br />
                    <a href={`/arts/${art._id}`}>{art.title}</a>
                </div>
               
              );
            })}
          
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
