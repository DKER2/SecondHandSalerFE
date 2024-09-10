import Button from "../../../components/Button.tsx";
import ListingItemService from "../../../services/ListingItemService.ts";

function CreateListingItemButton() {
    function onClick() {
        ListingItemService.createListingItem();
    }
    return (
        <div className="fixed bottom-0 right-0 p-4 bg-white z-10">
            <Button onClick={onClick} customClassName="bg-amber-300 border-none rounded-full" children="+" />
        </div>
    )
}
export default CreateListingItemButton;