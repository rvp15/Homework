
const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class Home extends React.Component {
  render() {
    const {arts} = this.props
    // console.log(arts)
    return (
      <DefaultLayout title="Home Page" nav="arts">
        <div>
         Home page
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Home;
