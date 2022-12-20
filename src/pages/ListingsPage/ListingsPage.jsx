import ListingItemPage from "../ListingItemPage/ListingItemPage";


export default function ListingsPage({ listings }) {
  return (
    <>
    <ul><ListingItemPage listings={listings} /></ul>
    </>
  );
}