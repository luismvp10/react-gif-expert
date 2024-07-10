import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setcategories] = useState(['Dragon Ball' ]);
  
  const onAddCategory = (newCategory) => {

    if( categories.includes(newCategory) ) return;

    setcategories(categories => [ newCategory, ...categories]);
  };


  return (
    <>

        <h1>GifExpertApp</h1>
     
            <AddCategory 
              //setcategories={ setcategories }
              onNewCategory={ onAddCategory }
            />
      
                {
                    categories.map( ( category ) => (
                    <GifGrid key={category} category={category}/>
                  ))
                }
  
    </>
  )
}
