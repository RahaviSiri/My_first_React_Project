import React from 'react'
// React Functional Components
const Footer = ({length}) => {
    const year = new Date();
    return (
        <footer>Today is &copy; {year.getDate()} and You have {length} {length === 1 ? "list" : "lists"} </footer>
    )
}

export default Footer