import * as React from 'react' 
import { FaFacebookF, FaInstagram, FaRocket, FaTwitter } from 'react-icons/fa';
import './Layout.css'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'

export const Footer: React.FC = ({}) =>{
        return (
            <div className="footer">
             <div className="footer-middle">
                © 2020 ULTRA, Inc. All rights reserved
             </div>
             <MediaQuery query="(min-width: 767px)">
             <div className="footer-right">
                 <FaTwitter className="icon-footer" />
                 <FaInstagram className="icon-footer" />
                 <FaFacebookF className="icon-footer" />
             </div>
             </MediaQuery>
            </div>
        );
}