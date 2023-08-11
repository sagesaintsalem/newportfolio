import '../styles/Card.css'

function Card (props) {
    //Line 5 allows multiple css classes to be added to a div. Here, .card will be applied where called in ExpenseItem and ExpenseDetails as well as other classes called in those functions.
    const classes = 'card ' + props.className;

    return (
        <div className={classes}>
            {props.children}
        </div>
    )

}

export default Card;