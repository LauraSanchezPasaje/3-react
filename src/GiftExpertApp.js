
import PropTypes from 'prop-types';
import {useState} from "react";
 
const title = 'Gift Expert App';
 
export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['First Category'])
    const [category, setCategory] = useState('')
 
    const onAddCategory = () => {
        setCategories( list => [...list, category])
        setCategory('')
    }
 
    const onSetCategory = ( evt ) => {
        setCategory( evt.target.value)
    }
 
    return(
        <>
        <h1> Caterogies </h1>
        <input type="text" id="fname" name="fname" onChange={(event) => onSetCategory(event)} />
        <button onClick={() => onAddCategory()}> Add Category </button>    
        <ol>
        {
          categories.map(
            (category, key) =>
            {
              return <li key = { key }> { category } </li>
            }
          )
        }
        </ol>    
       
        </>
    )
}
export default GiftExpertApp;