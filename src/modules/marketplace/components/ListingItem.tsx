interface IListingItemProps {
    imageUrl: string;
    price: number;
    currency: string;
    title: string;
    description: string;

}

function ListingItem(props: IListingItemProps) {
    return (
        <div>
            <image href={props.imageUrl}></image>
            <div>
                {props.price.toString() + props.currency}
            </div>
            <div>
                props.title
            </div>
            <div>
                {props.description}
            </div>
            <div>
                <button>Buy Now</button>
                <button>Add to cart</button>
            </div>
        </div>

    )
}

export default ListingItem;