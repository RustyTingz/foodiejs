import { useEffect, useState } from 'react';
import Meal from './Meal';
import classes from './AvailableMeals.module.css';
import Card from '../Core/Card';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      const response = await fetch('http://localhost:3010/meals')
      const meals = await response.json();      
      setMeals(meals)
    };

    void loadMeals();
    
  }, []);

  return (
    <section className={classes['available-meals']}>
      {meals.map((meal) => {
        return (
          <Card key={meal.id}>
            <Meal meal={meal} />
          </Card>
        );
      })}
    </section>
  );
};

export default AvailableMeals;
