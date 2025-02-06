export default function Item(props){
    return(
        <li className="ml-2 mb-3 p-2 bg-indigo-900 bg-opacity-30 w-96">
            <p className="text-lg font-semibold">{props.name}</p>
            Buy {props.quantity} in {props.category}
        </li>
    )
}