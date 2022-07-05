import React from 'react';
import { FooterColumn, FooterContainer, FooterRow, FooterText, FooterWrapper } from './FooterElement';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <FooterWrapper>
                    <FooterRow>
                        <FooterColumn>
                            <FooterText>
                                Design With <span style={{color:"#00e472",position:"relative",top:"5px"}}> <FavoriteIcon/>  </span> By Shahbaz Muzammil
                            
                            </FooterText>
                        </FooterColumn>
                    </FooterRow>
                </FooterWrapper>
            </FooterContainer>
        </div>
    );
};

export default Footer;

