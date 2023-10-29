import "@/Components/ToDoList/ToDoItem.css"

interface IToDoItems{
    userText: String
}

export default function ToDoItem( { userText } : IToDoItems ){
    
    return(
        <>
    <div className="ToDoItemContainer">
       <div className="userMessage">{userText}</div> 
       <div className="secondItem">second item</div>
    </div>
    </>
    )

}