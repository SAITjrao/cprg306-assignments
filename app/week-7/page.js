import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page(){

    const [items, setItems] = useState();

    function handleAddItem() {
        //adds new item to items data
        return "";
    }

    return (<main><h1 className="text-2xl font-bold p-2">Shopping List</h1><NewItem /><ItemList
    /></main>);
}