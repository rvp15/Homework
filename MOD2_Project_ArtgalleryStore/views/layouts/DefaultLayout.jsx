const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/styles.css" />
        </head>
        <body>
          <h1 id="header">Fine Mural Arts</h1>
          <hr />
          <nav className="navbaritems">
            <a id="homepage" href={`/${this.props.nav}`}>
              Home
            </a>

            <a href={`/${this.props.nav}/collection`}>Collection</a>
            <a href={`/${this.props.nav}/submitartwork`}>Submit Art Work</a>
            <a href={`/${this.props.nav}/about`}>About</a>
            <a href={`/${this.props.nav}/contact`}>Contact</a>
          </nav>
          <hr />
          <div>{this.props.children}</div>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
