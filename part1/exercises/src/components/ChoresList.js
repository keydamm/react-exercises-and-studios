import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div>
         <h3 className={classes.choresHeading}>Chores List</h3>
         <ul>
            <li className={classes.choresText}>Pick up office</li>
            <li className={classes.choresText}>Meal plan for busy weekend</li>
            <li className={classes.choresText}>Create wedding invites</li>
         </ul>
      </div>
   );
}