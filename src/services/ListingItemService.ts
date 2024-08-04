import axios from 'axios';

interface ListingItemSchema {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    currency: string;
}

const LISTING_ITEM_BASE_URL = process.env.BACKEND_BASE_URL + '/api/listingItem';

const ListingItemService = {
    fetchListingItem: async (): Promise<Array<ListingItemSchema> | null> => {
        try {
            const response = await axios.get<Array<ListingItemSchema>>(`${LISTING_ITEM_BASE_URL}/getListingItem`, {});
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }
};

export default ListingItemService;
