export default function BookList() {
   let pageTitle = "Books I Wish I Read This Month";
   let book1 = "https://cdn.vox-cdn.com/thumbor/sb6wLti4flqyhnb-LvI8G9Zw4To=/0x0:2040x1360/1400x1400/filters:focal(1029x801:1030x802)/cdn.vox-cdn.com/uploads/chorus_asset/file/10718793/mdoying_180425_2491_0001.jpg";
   let book2 = "https://images.squarespace-cdn.com/content/v1/62dd8ffb4a5f5f6967f7b45e/4c5e2a15-fd66-457d-a6fa-581d461b0ca3/BVO_Book_2.jpg";
   let book3 = "https://www.heirloomartco.com/cdn/shop/products/IMG_5999-2.jpg?v=1654306181";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} width="150" height="170" alt="Fire & Blood by George R.R. Martin" />
         <img src={book2} width="150" height="170" alt="Bad Vibes Only by Nora McInerny" />
         <img src={book3} width="150" height="170" alt="The Hobbit by J. R. R. Tolkien" />
      </div>      
   );
}