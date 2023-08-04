import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://tastesbetterfromscratch.com/peach-cobbler/";
    let authorPhoto = "https://tastesbetterfromscratch.com/wp-content/uploads/2023/06/about-me.jpg";
    let authorName = "Lauren Allen";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Tastes Better From Scratch" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
        <div> 
        <div>
           <h1>Old Fashioned Peach Cobbler</h1>
           <p>This old fashioned Peach Cobbler recipe is not only extremely easy to make from scratch, but it’s made with fresh or canned peaches so you can enjoy it all year round! It’s one of my favorite family recipes from my mom, and although I am bias, I think it’s the best of the best!</p>
        </div>
        <RecipeAuthor />
     </div>
        )
    }
}

export default RecipeDescription;