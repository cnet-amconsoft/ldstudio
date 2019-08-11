import React        from 'react';
import PropTypes    from 'prop-types';

const SocialContainer = ({children}) => {
    return (
        <React.Fragment>
            {React.Children.map(children, (child) => {
                return (
                    <a href={child.props.href}>
                        {child}
                    </a>
                )
            })}
        </React.Fragment>
    )
};

SocialContainer.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,         // SocialLink elements
};

export default SocialContainer;