import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionItem } from './header.styles';

const Header = ({ currentUser, cartItems, cartHidden, toggleCartHidden, handleChangeUser }) => {

    return(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop' >
                SHOP
            </OptionLink>
            {
                currentUser ?
                (
                    <OptionItem onClick={() => handleChangeUser(null)} >
                        SIGN OUT
                    </OptionItem>
                )
                :
                (
                    <OptionLink to='/signin' >
                        SIGN IN
                    </OptionLink>
                )
            }
            <CartIcon toggleCartHidden={toggleCartHidden} itemCount={cartItems.reduce(
                (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0
            )}/>
        </OptionsContainer>
        {
            cartHidden ? null : <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden}/>
        }
    </HeaderContainer>
)
        };

export default Header;