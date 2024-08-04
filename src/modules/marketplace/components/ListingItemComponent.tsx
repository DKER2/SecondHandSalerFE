import Button from "../../../components/Button.tsx";

export interface IListingItem {
    imageUrl: string;
    price: number;
    currency: string;
    title: string;
    description: string;

}

function ListingItemComponent(props: IListingItem) {
    return (
        <div className="transform hover:-translate-y-2 transition duration-300 ease-in-out border-gray-800 border-2 p-4 rounded-3xl">
            <img src={props.imageUrl} alt={props.title} ></img>
            <div>
                {props.price.toString() + " " + props.currency}
            </div>
            <div className="font-bold">
                {props.title}
            </div>
            <div className="text-left text-gray-400">
                {props.description}
            </div>
            <div className="flex items-center justify-around px-2 py-2">
                <Button children="Buy Now" />
                <Button children="Chat to seller"/>
            </div>
        </div>

    )
}

export default ListingItemComponent;