import "./styles.css"
import NavBar from './NavBar'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import kavehGif from "./assets/kaveh-encourage.gif"
import kavehJpg from "./assets/kaveh-encourage.jpg"

export default function App() {

  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [gif, setGif] = useState(false)

  // adds new task
  function addUserInput() {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask("");
  }

  //deletes a task by clicking minus icon
  function deleteTask(index) {
    const totalTasks = tasks.filter((element, i) => i !== index);
    setTasks(totalTasks);
  }

  function clearAllTasks() {
    setTasks([])
  }

  function playGif(){
    setGif(true)
    setTimeout(() => {
      setGif(false)
    }, 1500)
  }


  return (
    <>

      <NavBar />

      <section className="major-container">
        <div className="main-area">
          <div className="left-container">
            <div className="kaveh-gif">
              {!gif && <img src={kavehJpg} alt="Kaveh waiting" />}
              {gif && <img src={kavehGif} alt="Kaveh gif playing"></img>}
            </div>
            <div className="kaveh-gif">
            {!gif && <img src={kavehJpg} alt="Kaveh waiting" />}
            {gif && <img src={kavehGif} alt="Kaveh gif playing"></img>}
            </div>
            <div className="new-list">
              <button 
              id="encouragement-button"
              onClick={playGif}

              >click for double encouragement!</button>
            </div>
          </div>


          <div className="right-container">
            <h1 className="to-do-list-header">To Do List</h1>
            <ul id="toDoList">
              <li>
                <input type="text" id="newTask" placeholder="Add new item..." 
                value={newTask}
                onChange={event => setNewTask(event.target.value)}
                /> 
                <input type="button" id="setNewTask" value="Submit" 
                onClick={addUserInput}/>
              </li>
            </ul>
            <ul id="userList">
            {tasks.map((task, index) => (
                <li key={index}>{task}
                <FontAwesomeIcon icon={faMinus} 
                className="minusIcon"
                onClick={() => deleteTask(index)}/>

                </li>
                
            ))}

            </ul>
            <button id="clearAll"
            onClick={clearAllTasks}>Clear all items</button>
          </div>
        </div>
      </section>
    </>
  );
}