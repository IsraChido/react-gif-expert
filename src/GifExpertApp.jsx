import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {
        if (categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;
        // if ( categories.includes(newCategory)) return;
        // categories.push(newCategory);
        setCategories([newCategory, ...categories]);
        // setCategories(nuevaCategoria => [...nuevaCategoria, 'Valorant']);
    }

    return (
        <>  

            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={(value) => onAddCategory(value)}
            />
            {
                categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }
            
        </>
    )
}
