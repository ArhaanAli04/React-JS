import PropTypes from 'prop-types'
function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );

}
export default Student
Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,

}
Student.defaultProps={
    name: "Guest",
    age: 0,

}
