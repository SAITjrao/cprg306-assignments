export default function Item(props){

    const {name, quantity, category, onSelect} = props;

    const handleClick = () => {
        if (onSelect) {
            onSelect(name);
        }
    };

    return(
        <li className="ml-2 mb-3 p-2 bg-indigo-900 bg-opacity-30 w-96 hover: bg-opacity:50"
            onClick={handleClick}>

            <p className="text-lg font-semibold">{name}</p>
            Buy {quantity} in {category}
        </li>
    );
}