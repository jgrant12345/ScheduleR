import "@/Components/ToDoList/ToDoItem.css"
import  StyledMenu  from "../OptionsMenu/OptionsMenu"
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
interface IToDoItems{
    userText: String
    deleteItem : (deleteItemIndex: Number) => void;
    index: Number;
}

export default function ToDoItem( { userText, deleteItem, index } : IToDoItems ){
    
    return(
        <>
    <div className="ToDoItemContainer">
        <Checkbox />
       <div className="userMessage">{userText}</div> 
       <div className="secondItem"><StyledMenu deleteItem = {deleteItem} index = {index}/></div>
    </div>
    </>
    )

}