import axios from 'axios';
import {IListingItem} from "../modules/marketplace/components/ListingItem.tsx";

const LISTING_ITEM_BASE_URL = "http://localhost:8080" + '/api/listingItem';

interface IGetListingItemResult {
    content: Array<IListingItem>
}

const ListingItemService = {
    fetchListingItem: async (params: { [key: string]: any }): Promise<Array<IListingItem> | null> => {
        try {
            const response = await axios.get<IGetListingItemResult>(`${LISTING_ITEM_BASE_URL}/getListingItem`, {
                params: params, // This is where you include the request parameters
                headers: {
                    'Content-Type': 'application/json',
                    // Include other headers like authorization if required
                }
            });
            return response.data.content;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }
};

export default ListingItemService;
