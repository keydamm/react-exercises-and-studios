import styles from './Ingredients.module.css';

export default function RecipeIngredients () {
    let ingredients = ["peaches", "sugar", "salt", "butter", "flour", "baking powder", "milk", "cinnamon"];
    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {StyleSheet.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
                <li>{ingredients[5]}</li>
                <li>{ingredients[6]}</li>
                <li>{ingredients[7]}</li>
            </ul>
        </div>
    )
}