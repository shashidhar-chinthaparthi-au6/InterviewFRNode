import React from 'react';
import userData from "../../data/dashboard.json"
import Table from "../Table/table"
import './profile.css';
const Dashboard = () =>{
           return(
               <div>table display
                   <Table data={userData} />
               </div>
           )  
    
}

export default Dashboard;
