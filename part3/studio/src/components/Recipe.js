const RecipeAuthor = () => {
   let authorLink = "https://tastesbetterfromscratch.com/about/";
   let authorPhoto = "https://tastesbetterfromscratch.com/wp-content/uploads/2023/06/about-me.jpg";
   let authorName = "Lauren Allen";

   return (
      <div>
         <img src={authorPhoto} alt = "photo of author" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["peaches", "sugar", "salt", "butter", "flour", "baking podwder", "milk"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Peach Cobbler</h1>
            <p>This old fashioned Peach Cobbler recipe is not only extremely easy to make from scratch, but it’s made with fresh or canned peaches so you can enjoy it all year round! It’s one of my favorite family recipes from my mom, and although I am bias, I think it’s the best of the best!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://tastesbetterfromscratch.com/wp-content/uploads/2014/08/Peach-Cobbler-15.jpg" alt="cobbler" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}