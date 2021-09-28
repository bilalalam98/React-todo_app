import './App.css';
import { useState } from 'react';


/* TODO LIST 
1. Create
2. Read
3. Update
4. Delete

CRUD operations
*/

function App() {


  
  //onchange jjub jub yani dabey tou yeh ho kaam 
//event ka function me ayegi valiue .taret.value k through

 const [todoList,setTodoList] = useState([])
 const [text,setText] = useState('');
 const [status,setStatus] = useState(false);
 var [indexvalue,setindexValue]=useState();
 const day=new Date().getDay();
const month =new Date().getMonth();
const year=new Date().getFullYear()


 const addItem = (index) => {

  // todoList
  //input
  console.log(index)
  console.log('text===>',text)
  //todoList.push(text);
  //tou yehtemp list isiliyen bana rha hoon k yeh state k bagair kaam ho lekin reference same honey ki wjaah sey 
  //todolist me bhi changes ayengi
 // const tempval = todoList; but is sey tou bachna hai i want k in k reference alag hoon 
 //tou we use spreadoperator
 
 const tempList = [...todoList]
 tempList.push(text)
  setTodoList(tempList)
  setText('');
  



 }






 const deleteItem = (index)=>{
  // todoList
  //index
  //splice
  console.log('index===>',index)
 
 const tempList = [...todoList]
 tempList.splice(index,1)
  setTodoList(tempList);
 }





 const editItem = (index)=>{
// const editItem = index=>{} aese bhi likhsaktey hain because aik hi argument hai 
// to change the value of add button to edit
//item value should place in input 
//add button to edit 
//acha to add it kia hoga 
console.log('item ===>', (todoList[index]));
//is sey walue console me ajayegi 
//to set it 
//acha input me mene value{text} kia kiun k is sey yeh pata chal rha tha k jo value neechey hai woh uper ajaye 
setText(todoList[index]);
//is sey vlaue update ho rhi thi but input feild me nhi dikh rhi thi kiun k mene udher sirf bataya tha k bhai yeh value 
//tum andar insert karwado jobhi me input me daloon and add karwao 
//tou input pey bhi dekhey is k liyen mene neeche input me value{text kara 
//update ka aik function bana rhe hain jis sey value update ho
//us me button pey mene condition laai jis me buydefault false dia and jus edit ka button click ho tou woh true ho ajye ga 
//like this 

setStatus(true)
//yeh isliyen lagaya hai takey is edit index value me yeh is ka index safe hojaye and us sey mujhe update k andar value mil kjaye
setindexValue(index)

 }


const UpdateItem = ()=>{


//is sey updated input vlaue replce hojaye us k index sey 
  console.log('text ===>',text)

//ab mujhe index vlaaue chahieyh tou woh kha sey ayaega me uska new state bana doonga 
 //hum index off sye bhi kam kar saktye the but whan agar value same hoon 2ki tou woh kese pata kareyga konsa mangaya 
 console.log('index value  ===>',indexvalue)

 
  const tempList = [...todoList]
  tempList[indexvalue] = text
  setTodoList(tempList)
 

   //to change ad button to add back 
   setStatus(false);
   setText('');
//change edit index to null or undefines  taky woh hut jayega color marked
setindexValue()
}




  return (
    <div className="App" >
     
      <header className="App-header" >
  
      <h1 className="todoHead" style={{background: 'maroon',borderRadius:'15px',fontSize:'40px'}}>TODO LIST APP</h1>
      

<span>

    <input id="input" 
    style={{fontSize:'20px',outline:'none', background: 'rgb(179, 217, 230',borderTopLeftRadius:'8px',borderBottomLeftRadius:'8px'}}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type any task here" 
          value={text}
          />
{ status ?
        
<button id="add" style={{background: 'rgba(0, 0, 255, 0.357)',color:'white',fontSize:'20px',borderTopRightRadius:'8px',borderBottomRightRadius:'8px' }}   onClick={() => {
          UpdateItem() ;
        }}>Update</button> 
:
        <button id="add" style={{background: 'rgba(0, 0, 255, 0.357)',color:'white',fontSize:'20px',borderTopRightRadius:'8px',borderBottomRightRadius:'8px' }}   onClick={() => {
         addItem();
        }}>Add</button> }
        
        </span>

    

        <ol className='divstyle1'>
          {todoList.map((item, index) => {
            return <div className='divstyle'>
             
               <li className={index === indexvalue && "edit-color"} style={{fontWeight:500,fontSize:'17px'}}  >
              {item} &nbsp;&nbsp;&nbsp;
              ({day}/{month}/{year})&nbsp;&nbsp;
              <button style={{background: 'maroon',borderRadius:'10px',color:'white',fontSize:'15px'}}  onClick={() => deleteItem(index)}>Delete</button>
              <button style={{background: 'maroon',borderRadius:'10px',color:'white',fontSize:'15px'}}  onClick={() => {
                editItem();
                setText(item);
                setindexValue(index);
              }}>Edit</button>
            </li> </div>
          })}
        </ol>




      </header>
    </div>
  );
}

export default App;
