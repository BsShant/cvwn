import React from 'react'
import Copyright from '../../Components/Copyright/copyright.components'
import Footer from '../../Components/Footer/footer.component'
import MenuBar from '../../Components/Header/header.components'
import ScrollToTop from '../../Components/ScrollTop/ScrollTop'

export const PublicLayout = (props) => {
    return (
        <ScrollToTop>
            <MenuBar />
            {props.children}
            <Footer />
            <Copyright />

        </ScrollToTop>
    )
}
