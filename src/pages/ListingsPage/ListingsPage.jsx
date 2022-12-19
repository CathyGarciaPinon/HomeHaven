import ListingItemPage from "../ListingItemPage/ListingItemPage";


export default function ListingsPage({ listings, handleDelete}) {
  return (
    <>
    <ul><ListingItemPage listings={listings} handleDelete={handleDelete}/></ul>
    </>
  );
}