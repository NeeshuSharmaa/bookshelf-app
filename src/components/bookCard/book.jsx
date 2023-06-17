import { useState } from "react"
import "./book.css"
import { useDataContext } from "../../context/DataContext";
export default function Book({id, name, image, author,category, setBooksData}) {
  const [showCategoryBox, setShowCategoryBox]=useState(false);
  const {handleBooks}=useDataContext();

  return (
    <div className="book-card">
      <img src={image} alt={name} />
      <div className="book-info">
      <h3>{name}</h3>
      <div><p>{author}</p>
     
      <button onClick={()=>setShowCategoryBox(true)}><span>Category</span><img src="down-arrow.svg" alt="drop-down"/></button></div>

      </div>
      {showCategoryBox && 
      <div className="move-to-container">
        <h3 style={{color:"grey"}}>Move to....</h3>
        <p style={category==="reading"?{fontWeight:"bold", backgroundColor:"white"}:{}} onClick={()=>{handleBooks(id, "reading"); setShowCategoryBox(false)}}>Currently Reading
        </p>
        <p  style={category==="read"?{fontWeight:"bold", backgroundColor:"white"}:{}} onClick={()=>{handleBooks(id, "read"); setShowCategoryBox(false)}}>Already Read</p>
        <p  style={category==="tbr"?{fontWeight:"bold", backgroundColor:"white"}:{}} onClick={()=>{handleBooks(id, "tbr"); setShowCategoryBox(false)}}>Want to Read</p>
        <p  style={category==="none"?{fontWeight:"bold", backgroundColor:"white"}:{}} onClick={()=>{handleBooks(id, "none"); setShowCategoryBox(false)}}>None</p>
      </div>}
     
     
      
     
    </div>
  )
}
