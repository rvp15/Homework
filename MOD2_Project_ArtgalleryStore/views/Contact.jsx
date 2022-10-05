
const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class Contact extends React.Component {
    render() {
        const {arts} = this.props
        // console.log(arts)
        return (
          <DefaultLayout title="Home Page" nav="arts">
            <div>
            Contact Page
            </div>
          </DefaultLayout>
        );
      }
}

module.exports = Contact;
