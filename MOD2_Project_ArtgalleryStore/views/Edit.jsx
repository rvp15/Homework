const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class Edit extends React.Component {
  render() {
    const { editAArt } = this.props;
    // console.log(`Edit page ${editALog}`)

    let templa;

    return (
        <DefaultLayout title='Edit Your Details' nav='log'>
      <div>
            <h1>Edit {editAArt.title}</h1>
                <form action={`/arts/${editAArt._id}?_method=PUT`} method='POST'>

                <label htmlFor="title">Title:</label>
                    <input type="text" id='title' name='title' defaultValue={editAArt.title}/> <br /> <br />

                    <label htmlFor="price">Price:</label>
                    <input type="text" id='price' name='price' defaultValue={editAArt.price}/> <br /> <br />

                    <label htmlFor="artist">Artist:</label>
                    <input type="text" id='artist' name='artist' defaultValue={editAArt.artist}/> <br /> <br />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" cols="30" rows="10" defaultValue={editAArt.description}></textarea> <br /> <br />

                    <label htmlFor="count">Count:</label>
                    <input type="number" id='count' name='count' defaultValue={editAArt.count}/> <br /> <br />

                    {editAArt.image && <><span>Existing image:</span><span>{editAArt.image}</span></>} <br /> <br />

                    <label htmlFor="image">Upload new image</label>
                    <input type="file" name="image" id="image" />
                 
                    <input type="submit" value='Update' />
                    </form>
            </div>
      </DefaultLayout>
    );
  }
}

module.exports = Edit