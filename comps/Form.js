import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

const Form = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  let btnKey=0;
  let [content , setContent]= React.useState([]);
  const [isActive, setIsActive] = useState(styles.taskbtn);

  const handleClick = e => { 
    setIsActive(isActive == styles.taskbtn ? " " : styles.taskbtn); 
    e.target.id= isActive;
  };

    return ( 
      <div>
        <h1>Things I need to do today</h1>
        <getCurrentDate/>
        <div>
          <div className="time">
            <h1>{date}</h1>
          </div>
          <input className={styles.textbox} type="text" id="textID" placeholder='You can do it'/>
          <button className={styles.btn} type="submit" onClick={()=>
            {setContent([...content, textID.value] 
            )}}
            >Add Task</button>
        </div>
        <div>{content.map((cont)=>(
          <button className={styles.taskbtn}  key={btnKey = btnKey+1} onClick={handleClick}>{`${btnKey+1+'.'}  ${cont}`}</button>
          ))}
        </div>
      </div>  
     );
}
 
export default Form;
