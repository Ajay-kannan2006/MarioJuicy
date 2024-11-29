import { useEffect, useRef } from 'react';
import FoodCategoryCard from "./foodCategoryCard";
import './foodCategory.css';

export default function FoodCategory() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollSpeed = 1; // Adjust scroll speed as needed

        const startScrolling = () => {
            scrollContainer.scrollLeft += scrollSpeed;

            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                scrollContainer.scrollLeft = 0;
            }
        };

        const scrollInterval = setInterval(startScrolling, 20); 

        return () => clearInterval(scrollInterval); 
    }, []);

    return (
        <>
            <h2 className='h2'>Our Food Category</h2>
            <div className="main" ref={scrollRef}>
                <div className="scroll-content">
                    <FoodCategoryCard title={"noodels"}/>
                    <FoodCategoryCard title={"ice cream"}/>
                    <FoodCategoryCard title={"Noodels"}/>
                    <FoodCategoryCard title={"Noodels"}/>
                    <FoodCategoryCard title={"Noodels"}/>
                    <FoodCategoryCard title={"Noodels"}/>
                    <FoodCategoryCard title={"Noodels"}/>
                    <FoodCategoryCard title={"Noodels"}/>
                    <FoodCategoryCard title={"Noodels"}/>
                    <FoodCategoryCard title={"Noodels"}/>
                    <FoodCategoryCard title={"Noodels"}/>
                    <FoodCategoryCard title={"Noodels"}/>
                    <FoodCategoryCard title={"Noodels"}/>
                    <FoodCategoryCard title={"Noodels"}/>
                    
                </div>
            </div>
        </>
    );
}
