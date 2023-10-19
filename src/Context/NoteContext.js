import { createContext } from "react";
import { useState,useEffect } from "react";

export const Context=createContext();


export const Notecontext=(props)=>{

    
    

    // FOR THE FILTER DROPDOWN 

    const [selectedGrouping, setSelectedGrouping] = useState(localStorage.getItem('groupby')===null?'userId':localStorage.getItem('groupby') );

    const [selectedOrdering, setSelectedOrdering] = useState(localStorage.getItem('orderby')===null?'priority':localStorage.getItem('orderby') );
  
    const handleGroupingChange = (event) => {
      setSelectedGrouping(event.target.value);
    };
  
    const handleOrderingChange = (event) => {
      setSelectedOrdering(event.target.value);
    };
  
    const [displayfilter, setDisplayFilter] = useState(false);
  
    const showFilter = () => {
      setDisplayFilter(!displayfilter);
    };
    
    //   --------------------------------------------


    
    const prioritylist=['No priority','Low','Medium','High','Urgent'];




    
    // TO FETCH THE DATA 

    const [tickets, settickets] = useState([])
    const [users, setusers] = useState([])
    const [Group, setGroup] = useState([])
    // const [priority, setpriority] = useState([])

    useEffect(() => {

        if(localStorage.getItem('groupby')===null)
        {
            localStorage.setItem('groupby','status')
        }

        if(localStorage.getItem('orderby')===null)
        {
            localStorage.setItem('orderby','priority')
        }
       
        fetchData();
        localStorage.setItem('groupby',selectedGrouping);
        localStorage.setItem('orderby',selectedOrdering);

        // eslint-disable-next-line
      }, [selectedGrouping,selectedOrdering]);

    
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
          if (response.ok) {
            const data = await response.json();
            console.log('Data from the API:', data);
            settickets(data.tickets)
            setusers(data.users)

              // Extract unique status and priority values
              
              selectedGrouping==='status'?
              setGroup(Array.from(new Set(data.tickets.map(ticket => ticket.status))))
              :
              selectedGrouping==='priority'?
              setGroup([0,1,2,3,4])
              :
              setGroup(Array.from(new Set(data.users.map(user => user.id))))


          } else {
            console.error('Failed to fetch data from the API');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    //   --------------------------------------------











    return(
        <Context.Provider value={{showFilter,displayfilter,selectedGrouping,selectedOrdering,handleGroupingChange,handleOrderingChange,Group,users,prioritylist,tickets}} >
            {props.children}
        </Context.Provider>

    )


}