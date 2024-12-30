import React from 'react'
import { useEffect } from 'react';

function Employee() {

  useEffect(() => {
    document.title = "Employee Shifts - Employee"; // Sets the browser tab title
  }, []);

  return (
    <div>
      Hello
    </div>
  )
}

export default Employee;
