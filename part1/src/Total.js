const Total = (props) => {
    return <div> 
        <p>
            Number of exercises 
            {props.exercises.reduce((prev, current) => prev + current)}
        </p> 
    </div>
}

export default Total;