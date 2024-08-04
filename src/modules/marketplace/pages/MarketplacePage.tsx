import {useEffect, useState} from "react";
import ListingItem, {IListingItem} from "../components/ListingItem.tsx";
import ListingItemService from "../../../services/ListingItemService.ts";

export interface IMarketplacePageProps {
    page: number,
    size: number
}

function MarketplacePage(props: IMarketplacePageProps) {
    const [listingItems, setListingItems] = useState<Array<IListingItem>>([]);

    useEffect( () => {
        const loadData = async () => {
            const listingItems= await ListingItemService.fetchListingItem({
                page: props.page,
                size: props.size
            });
            if (listingItems) {
                setListingItems(listingItems);
            } else {
                console.log("Error fetching listingItem");
            }

        }
        loadData()
    }, [])

    return (
        <div>
            {listingItems.map((item, i) => (
                <ListingItem key={i} {...item} />
            ))}
        </div>
    )
}

export default MarketplacePage;