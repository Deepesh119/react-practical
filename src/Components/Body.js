import React,{useState} from 'react'
import "../App.css";
import flower from "../Assets/Images/flower.jpg";
import flower2 from "../Assets/Images/flower2.jpg";
import TodoList from './TodoList';
const Body = () => {
    const [inputList,setInputList]= useState("");
    const [items,setItems] = useState([]);
     
    const itemEvent =(event)=>{
       setInputList(event.target.value);
    }
    const listOfItems =()=>{
        setItems((olditems)=>{
            return[...olditems,inputList]
        })
        setInputList(" ");
    }
    const DeleteItems =(id)=>{
        setItems((olditems)=>{
            return olditems.filter((arrElem,index)=>{
               return index !== id ;
            })
        })
    }
    const EditItem =(id)=>{
        console.log("edit")
       let newEditItems = items.find((elem)=>{
           return elem.id == id ;
       })
       
       setInputList(newEditItems.name)
    }
   
 return (
    <>
    <div className='Body'>
        <div className='SideBar'>
         <img src={flower} alt="flower" className='ImageHeight'/>

        </div>
        <div className='InputDivision'>
            <input type="text" onChange={itemEvent} placeholder="Add To Do" value={inputList}  className="TodoInput"/><button className="TodoInput" onClick={listOfItems}>ADD TO DO</button>
            <div className='TodoMaped'>
               {items.map((itemval,index)=>{
                 return(
                  <TodoList
                      onSelect={EditItem}
                      delete ={DeleteItems}
                      id={index}
                      key={index}
                      text={itemval}
                  />
                 )
               })}
            </div>
        </div>
        <div className='SideBar'>
          <img src={flower2} alt="FLower2" className='ImageHeight'/>
         </div>
    </div>
    </>
  )
}

export default Body