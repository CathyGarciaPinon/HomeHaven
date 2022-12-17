import ListingItemPage from "../ListingItemPage/ListingItemPage";


export default function ListingsPage({ user, listings}) {
  return (
    <>
    <ul><ListingItemPage listings={listings}/></ul>
    </>
  );
}