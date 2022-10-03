const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class Edit extends React.Component {
  render() {
    const { editALog } = this.props;
    // console.log(`Edit page ${editALog}`)
    return (
        <DefaultLayout title='Edit Log' nav='log'>
      <div>
       <h1>Edit {editALog.title} Log</h1>
        <form action={`/log/${editALog._id}?_method=PUT`} method="POST">

          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" defaultValue={editALog.title}/> <br /> <br />

          <label htmlFor="entry">Entry:</label>
          <textarea name="entry" id="entry" cols="30" rows="10"  defaultValue={editALog.entry}></textarea> <br /> <br />

          <label htmlFor="broken">Is Ship Broken:</label>
          <input type="checkbox" name="broken" defaultChecked={editALog.broken} /><br /> <br />

          <input  className='showBtn'  type="submit" value="UpdateLog" />
        </form>
      </div>
      </DefaultLayout>
    );
  }
}

module.exports = Edit