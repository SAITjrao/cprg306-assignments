export default function Item(props){
    return(
        <li>
            {props.name} <br/> Buy {props.quantity} in {props.category}
        </li>
    )
}