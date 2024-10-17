import './foodCategory.css';
import image1 from '../assets/image1.png'; 

export default function FoodCategoryCard({ title }) {
    return (
        <div className='div'>
            <img className='img' src={`${image1}`} alt={title} />
            <p className='p'>{title}</p>
        </div>
    );
}
