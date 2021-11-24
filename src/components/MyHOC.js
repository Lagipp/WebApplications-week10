



const Component = ({ name }) => {
    return <div> Hello { name }! </div>;
}



const MyHOC = (oldComponent, props) => {
    return <div className="wrapper"> oldComponent({...props}) </div>
}



const wrappedWithName = MyHOC(Component, { name: "Miika"} );


export default MyHOC