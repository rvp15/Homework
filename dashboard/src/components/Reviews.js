function Reviews(props){
    return(
        <div className='item review' >
            <h2>Reviews</h2>
            <h1> {props.num.toLocaleString('en-US')}</h1>
        </div>
    )
}

export default Reviews