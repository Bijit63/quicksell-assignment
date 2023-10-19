import React, { useContext } from 'react';
import { BiCircle } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { PiWarningCircleFill , PiCellSignalFullFill,PiCellSignalMediumFill,PiCellSignalLowFill } from 'react-icons/pi';
import { FaUserAlt } from 'react-icons/fa';
import { TbProgress } from 'react-icons/tb';
import { AiOutlineLeftCircle , AiOutlinePlus } from 'react-icons/ai';
import Card from './Card';
import { Context } from '../Context/NoteContext';


const KanbanBoard = () => {
  const context = useContext(Context);
    const {selectedGrouping,Group,users,prioritylist,tickets}=context;




  return (
    
     <div className='kanban-board '>
     {Group.map(element => {


// TO CUSTOMISE AND SET THE GROUP TITLE NAMEE 

  // FOR USERS 
  const groupTitle = selectedGrouping === 'userId' ? (
    users.find(user => user.id === element) ? <div> <span className='userheader-icon'><FaUserAlt/></span>{users.find(user => user.id === element).name} </div> : 'User not found'
  ) :

  // FOR STATUS 
  selectedGrouping === 'status' ?
  (
    <span className='kandan-header'>{element==='In progress'?<TbProgress className='yellow' />:element==='Todo'?<BiCircle className='gray' />:<AiOutlineLeftCircle className='red' />} {element}</span>
  )
  :

  // FOR PRIORITY 

  (
  <div className='priorityheader'>
    {element===0?
      <BsThreeDots className='priorityheader-icon' />
      :
      element===1?<PiCellSignalLowFill className='priorityheader-icon' />
      :
      element===2?<PiCellSignalMediumFill className='priorityheader-icon' />
      :
      element===3?<PiCellSignalFullFill className='priorityheader-icon' />
      :
      <PiWarningCircleFill className='priorityheader-icon'/>
    }
    {prioritylist[element]}
  </div>
    )


  // CARDS IN SINGLE COLUMN.... 
  const filteredTickets = tickets.filter(ticket => ticket[selectedGrouping] === element);



//   TO ORDER THE COLUMNS ACORDING TO THE FILTER 

  localStorage.getItem('orderby')==='title'?filteredTickets.sort((a, b) => a.title.localeCompare(b.title)):filteredTickets.sort((a, b) => a.priority - b.priority);



  const ticketCount = filteredTickets.length;



  return (
    <div className='kanban-column' key={element}>
      <div className='kandan-heading'>
        <h1 className='kandan-columnname'>
        {groupTitle} <span className='columncard-count'>{ticketCount}</span> 
        </h1>
        <div className='kandan-columnname-icons'>
         <AiOutlinePlus/> <span><BsThreeDots/></span>
            </div>
         </div>
      {filteredTickets.map(ticket => (
        <Card key={ticket.id} id={ticket.id} title={ticket.title} tag={ticket.tag} />
      ))}
    </div>
  );
})}


</div>

 
  );
};

export default KanbanBoard;
