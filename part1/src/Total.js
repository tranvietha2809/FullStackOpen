const Total = (props) => {
    var total = 0;
    props.exercises.forEach(exercise => {
        total += exercise.exercises
    });
    return <div> 
        <p>
            Number of exercises {total}
        </p> 
    </div>
}

export default Total;