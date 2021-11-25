

const MyHOC = (oldComponent, props) => {
    return <div className="wrapper"> { oldComponent({...props}) } </div>
}


export default MyHOC