

const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class submitartwork extends React.Component {
    render() {
        const {arts} = this.props
        // console.log(arts)
        return (
          <DefaultLayout title="Home Page" nav="arts">
            <div>
            <h1>Submit Art Work</h1>
                <form action="/arts/collection" method='POST' encType="multipart/form-data">
                <label htmlFor="title">Title:</label>
                    <input type="text" id='title' name='title'/> <br /> <br />

                    <label htmlFor="price">Price:</label>
                    <input type="text" id='price' name='price'/> <br /> <br />

                    <label htmlFor="artist">Artist:</label>
                    <input type="text" id='artist' name='artist'/> <br /> <br />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" cols="30" rows="10"></textarea> <br /> <br />

                    <label htmlFor="count">Count:</label>
                    <input type="number" id='count' name='count'/> <br /> <br />
                    
                    <label htmlFor="image">Upload image</label>
                    <input type="file" name="image" id="image" />
                    
                    <input type="submit" value='Submit' />
                    </form>
            </div>
          </DefaultLayout>
        );
      }
}

module.exports = submitartwork;
