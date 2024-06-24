import React from 'react'

const Header = ({title}) => {
    // const headerStyle = {
    //     backgroundColor:'red',
    //     color:'blue'
    // }
    return (
        // <header style={headerStyle}>
        <header >
            <h1>I'm {title}</h1>
        </header>
    )
}
// If loaded Parameter not works this one will display
// Header.defaultProps = {
//     title : "Rahavi"
// }

export default Header