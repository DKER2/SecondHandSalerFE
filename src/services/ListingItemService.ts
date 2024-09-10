import axios from 'axios';
import {IListingItem} from "../modules/marketplace/components/ListingItemComponent.tsx";

const LISTING_ITEM_BASE_URL = "http://localhost:8080" + '/api/listingItem';

interface IGetListingItemResult {
    content: Array<IListingItem>
}

const ListingItemService = {
    fetchListingItem: async (params: { [key: string] }): Promise<Array<IListingItem> | null> => {
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
    },

    createListingItem: async () => {
        try {
            const data = {
                "title": "Vintage Vase",
                "description": "A beautifully crafted vintage vase.",
                "imageUrl": "https://i.imgur.com/fHyEMsl.jpg",
                "price": 30.21,
                "currency": "USD",
                "seller": {
                    "id": -43
                }
            };

            const response = await axios.put(`${LISTING_ITEM_BASE_URL}/createListingItem`, data)
            return response.data.content;
        } catch (error) {
            console.error('Error creating data:', error);
            return null;
        }
    }
};

export default ListingItemService;
