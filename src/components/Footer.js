import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li><a href="https://twitter.com/chiragshetty98" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/chirag.shetty.7374480" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.linkedin.com/in/chiragshetty98" className="icon fa-linkedin"><span className="label">linkedin</span></a></li>
            <li><a href="mailto:nurdtechie98@gmail.com" className="icon fa-envelope"><span className="label">Mail</span></a></li>
            <li><a href="https://github.com/nurdtechie98" className="icon fa-github"><span className="label">GitHub</span></a></li>
        </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
