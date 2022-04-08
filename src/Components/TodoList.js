import React from 'react';
import { FaTimes,FaHighlighter} from "react-icons/fa";
import "../App.css";

const TodoList = (props) => {
    
  return (
      <>
    <div className='Division'> 
   
    <h4 > <FaTimes onClick={()=>{props.delete(props.id)}}/> <FaHighlighter onClick={()=>{props.onSelect(props.itemval.id)}}/>{props.text}</h4>
    </div> 
    </>
  )
}

export default TodoList