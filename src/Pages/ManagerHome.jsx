import React, { useEffect, useState } from 'react';
import ManagerNavBar from '../Components/ManagerNavBar';
import ManagerInfo from '../Components/ManagerInfo';
import axios from 'axios';

function ManagerHome() {
    const [manager, setManager] = useState(null); 

    useEffect(() => {
        document.title = "Employee Shifts - ManagerHome"; 

        const managerId = JSON.parse(localStorage.getItem("managerid"));

        if (managerId) {
            axios.get(`api/Manager/get-manager-by-id/${managerId}`)
            .then(response => {
                console.log(response.data);

                const Data = {
                    ManagerId: managerId,
                    Name: response.data.name,
                    LastName: response.data.lastName,
                    Email: response.data.email,
                    Phone: response.data.phoneNumber,
                    Username: response.data.username,
                    Address: response.data.address,
                    Birthday: response.data.birthday ? new Date(response.data.birthday).toLocaleDateString() : "N/A",
                    AccountCreated: response.data.createdAt ? new Date(response.data.createdAt).toLocaleDateString() : "N/A",
                    LastUpdated: response.data.updatedAt ? new Date(response.data.updatedAt).toLocaleDateString() : "N/A",
                };
                

                setManager(Data)
            })
            .catch(error => {
                console.error('Error fetching manager data:', error);
            });
        }
    }); 

    return (
        <div>
            <ManagerNavBar />
            {manager ? <ManagerInfo manager={manager} /> : <p>Loading manager information...</p>}
        </div>
    );
}

export default ManagerHome;
