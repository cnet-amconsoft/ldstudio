import React        from 'react';
import PropTypes    from 'prop-types';

export default function SocialContainer(props) {
    const {children} = props;

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
}


SocialContainer.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,         // SocialLink elements
};