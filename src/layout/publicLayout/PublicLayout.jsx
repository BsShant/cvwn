import React from 'react'
import Copyright from '../../Components/Copyright/copyright.components'
import Footer from '../../Components/Footer/footer.component'
import MenuBar from '../../Components/Header/header.components'

export const PublicLayout = (props) => {
    return (
        <>
            <MenuBar />
            {props.children}
            <Footer />
            <Copyright />

        </>
    )
}
