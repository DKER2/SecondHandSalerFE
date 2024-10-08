import React, {useEffect, useState} from "react";
import ListingItemComponent, {IListingItem} from "../components/ListingItemComponent.tsx";
import ListingItemService from "../../../services/ListingItemService.ts";
import CreateListingItemButton from "../components/CreateListingItemButton.tsx";

export interface IMarketplacePageProps {
    page: number,
    size: number
}

function MarketplacePage(props: IMarketplacePageProps) : React.ReactNode {
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
        <>
            <div className="flex flex-wrap">
                {listingItems.map((item, i) => (
                    <div className="px-2 w-1/3" key={i}>
                        <ListingItemComponent {...item} />
                    </div>
                ))}
            </div>
            <CreateListingItemButton/>
        </>
    )
}

export default MarketplacePage;