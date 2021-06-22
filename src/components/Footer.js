import React from 'react'

function Footer() {
    return(
        <div className="footer">
            <h3>get in contacts</h3>
            <p>Email me, if you want to work with me and know about me!</p>
            <address>aktherkaur@gmail.com</address>
            {/*<a href='file:///Users/kausarakther/Downloads/Kausar%20Akther%20(1).pdf'>
                <i class="fas fa-download"></i>
                <p>my resume</p>
            </a>*/}
            

            <ul className='footer-ul'>
                <li>
                    <a href="https://github.com/"><i class="fab fa-linkedin"></i></a>
                </li>
                <li >
                    <a href="https://github.com/"><i class="fab fa-github-square"></i></a>
                </li>
            </ul>
                <p className='col-sm'>
                    &copy;kausarakther{new Date().getFullYear()}
                </p>
        </div>
    )
}


export default Footer