import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { StyledFooter } from './styles/Footer.styled';

export default function FooterLayout() {

    const footerLinks = [
        {
            icon: faInstagram,
            link: "https://www.instagram.com/squishiesrescueinc/"
        },
        {
            icon: faFacebook,
            link: "https://www.facebook.com/SquishiesRescue/"
        },
        {
            icon: faEnvelope,
            link: "mailto:rescueandadoption@gmail.com"
        },
    ];

    return (
        <StyledFooter>
            <ul className='footerList'>
                {footerLinks.map((item) => (
                    <li key={item.link} className='footerItem'>
                        <a href={item.link} target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={item.icon} size='2x' />
                        </a>
                    </li>
                ))}
            </ul>
            <p className="footerCaption">Squishy Faces - on behalf of Squishies Flat Face Rescue</p>
        </StyledFooter>
    );
}
