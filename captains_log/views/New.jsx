const React = require('react')
const DefaultLayout = require("./layouts/DefaultLayout");

class New extends React.Component{
    render(){
        return(
            <DefaultLayout title='Create New Log' nav='log'>
            <div>
                <h1>Create New Log Page</h1>
                <form action="/log" method='POST'>

                    <label htmlFor="title">Title:</label>
                    <input type="text" id='title' name='title'/> <br /> <br />

                    <label htmlFor="entry">Entry:</label>
                    <textarea name="entry" id="entry" cols="30" rows="10"></textarea> <br /> <br />

                    <label htmlFor="broken">Is Ship Broken:</label>
                    <input type="checkbox" name="broken" defaultChecked/><br /> <br />
                     

             <input className='showBtn'  type="submit" value='Submit Log' />
                </form>
            </div>
            
            </DefaultLayout>
        )
    }
}
module.exports = New