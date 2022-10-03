const React = require('react')
const DefaultLayout = require("./layouts/DefaultLayout");

class Index extends React.Component{
    render(){
        const {logs} = this.props
        console.log(logs)
        return(
            <DefaultLayout title='All Logs' nav='log'>
           <div className='main'>
          
            <ul>{logs.map((log)=>{
                return(
                 <li id='listid' key={log._id}>
                    <a className='list' href={`/log/${log._id}`}>{log.title}</a>
                  
                 </li>
                )
            })}
            </ul>
            <nav>
                <a id='create' href='/log/new'>Create a New Log</a>
            </nav>
           </div>
           </DefaultLayout>
        )
    }
}

module.exports = Index