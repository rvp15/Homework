const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>
                    <nav>
                        <a id='homepage' href={`/${this.props.nav}`}>Home Page</a>
                        <h1 id='header'>CAPTAIN'S LOG</h1> 
                </nav>
                <div className='childdiv'>
                {this.props.children}</div>
                </body>
            </html>
        )
    }}
    module.exports =DefaultLayout