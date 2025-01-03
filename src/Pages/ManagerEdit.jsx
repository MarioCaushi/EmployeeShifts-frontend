import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ManagerNavBar from '../Components/ManagerNavBar';
import ManagerEditInfo from '../Components/ManagerEditInfo';

function ManagerEdit() {
    const [manager, setManager] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        document.title = "Employee Shifts - ManagerEdit";

        const managerId = JSON.parse(localStorage.getItem("managerid"));
        const abortController = new AbortController(); // For cleanup

        if (managerId) {
            axios.get(`api/Manager/get-manager-by-id/${managerId}`, { signal: abortController.signal })
                .then((response) => {
                    const data = {
                        ManagerId: managerId,
                        Name: response.data.name,
                        LastName: response.data.lastName,
                        Email: response.data.email,
                        Phone: response.data.phoneNumber,
                        Username: response.data.username,
                        Password: response.data.password,
                        Address: response.data.address,
                        Birthday: response.data.birthday ? response.data.birthday.split('T')[0] : "", // ISO Date Format
                    };

                    setManager(data);
                })
                .catch((error) => {
                    if (axios.isCancel(error)) {
                        console.log('Request canceled:', error.message);
                    } else {
                        console.error('Error fetching manager data:', error);
                        setError("Failed to fetch manager information.");
                    }
                });
        }

        return () => {
            abortController.abort(); // Cleanup on unmount
        };
    }, []); 

    return (
        <div>
            <ManagerNavBar />
            {error && <p className="alert alert-danger">{error}</p>}
            {manager ? (
                <ManagerEditInfo manager={manager} />
            ) : (
                <p>Loading manager information...</p>
            )}
        </div>
    );
}

export default ManagerEdit;
