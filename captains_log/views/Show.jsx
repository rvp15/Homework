const React = require('react')
const DefaultLayout = require("./layouts/DefaultLayout");

class Show extends React.Component{
    render(){
       
      const {alog} = this.props
      console.log(alog)
      return(
        <DefaultLayout title="Log Detail" nav='log'>
        <div>
           <h1>Log Details of {alog.title}</h1>
           <p>Entry Details: {alog.entry}</p>
           <p>{alog.broken?"Ship is Broken":"Ship is not Broken"}</p>
           <p>Created Date:{alog.timestamp.toLocaleString()}</p>
           <p>Update Date:{alog.updateddate?.toLocaleString()}</p>
           <nav>
       <div className='showButton'>
       <button className='showBtn'><a href={`/log/${alog._id}/edit`}>Edit</a></button>
       
         <form  action={`/log/${alog._id}?_method=DELETE`} method='POST'>
            <button  className='formbtn' value="Delete">Delete</button>
         </form>

        <button className='showBtn'  ><a href={`/log`}>Back</a></button>
       </div>
        </nav>
        </div>
  
        </DefaultLayout>
      )
    }
}
module.exports = Show