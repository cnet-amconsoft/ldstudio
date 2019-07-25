import React from 'react';
import PropTypes from 'prop-types';
import handleViewport from 'react-in-viewport';

// Default options for intersection observer API.
const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};

// Wrapping component for child element.
const Wrapper = ({children, innerRef}) => <div ref={innerRef}>{children}</div>;

const ViewportComponent = props => {
    const {
        disconnectOnLeave,
        options,
        ...otherProps
    } = props;

    const Root = handleViewport(
        Wrapper,
        options || defaultOptions,
        disconnectOnLeave
        );

    return <Root {...otherProps}/>;
};

Wrapper.propTypes = {
    children: PropTypes.element.isRequired,
    innerRef: PropTypes.func.isRequired,
};

ViewportComponent.propTypes = {
    children: PropTypes.element.isRequired,
    disconnectOnLeave: PropTypes.bool,
    onEnterViewport: PropTypes.func,
    onLeaveViewport: PropTypes.func,
    options: PropTypes.object,
};

export default ViewportComponent;
