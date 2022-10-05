const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class About extends React.Component {
    render() {
        const {arts} = this.props
        // console.log(arts)
        return (
          <DefaultLayout title="Home Page" nav="arts">
            <div>
           About Page
            </div>
          </DefaultLayout>
        );
      }
}

module.exports = About;
