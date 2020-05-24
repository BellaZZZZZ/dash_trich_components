import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import SideNav from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default class SideBar extends Component {

    render() {

        const {
            id,
            className,
            bg_color,
            text_color,
            children
        } = this.props

        return (
            <SideNav
                id={id}
                className={`${className} trich_sidebar`}
                style={
                    { 'backgroundColor': bg_color },
                    { 'color': text_color }
                }
            >
                <SideNav.Toggle />
                <SideNav.Nav>
                    {children}
                </SideNav.Nav>
            </SideNav>
        );
    }

}

SideBar.defaultProps = {
    id: null,
    className: '',
    style: null,
    bg_color: 'inherit',
    text_color: 'inherit'
};

SideBar.propTypes = {
    /**
     * Id of the element
     */
    id: PropTypes.string,

    /**
     * Inline style of the component.
     */
    style: PropTypes.object,
    /**
     * Style class of the component.
     */
    className: PropTypes.string,

    /**
     * Color of sidebar background
     */
    bg_color: PropTypes.string,

    /**
     * Color of sidebar text
     */
    text_color: PropTypes.string,

    /**
    * Your carousel is vertical
    */
    children: PropTypes.node
};
