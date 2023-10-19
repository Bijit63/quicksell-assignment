import React, { useContext } from 'react'
import { Context } from '../Context/NoteContext';
import { BiChevronDown } from 'react-icons/bi';


const Navbar = () => {

    const context = useContext(Context);
    const {showFilter,displayfilter,selectedGrouping,selectedOrdering,handleGroupingChange,handleOrderingChange}=context;



  return (
   <div>
    <div className="navbar">
        <div className="Display">
          <img src="https://cdn-icons-png.flaticon.com/512/6590/6590958.png" alt="" className="imagefilter" />
          <p onClick={showFilter} className="labelfilter">Display <span><BiChevronDown className="icondown" /></span></p>
        </div>
      </div>



      {displayfilter && (
        <div className="filter-container">
          <div className="filter-options">
            <label htmlFor="groupingSelect" className="select-label">Grouping:</label>
            <select
              id="groupingSelect"
              name="grouping"
              value={selectedGrouping}
              onChange={handleGroupingChange}
              className="select-input"
            >
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="filter-options">
            <label htmlFor="orderingSelect" className="select-label">Ordering:</label>
            <select
              id="orderingSelect"
              name="ordering"
              value={selectedOrdering}
              onChange={handleOrderingChange}
              className="select-input"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
   </div>



  )
}

export default Navbar