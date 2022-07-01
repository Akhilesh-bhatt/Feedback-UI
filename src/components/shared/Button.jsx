import PropTypes from 'prop-types'

function Button({type, version, children, isDisabled}) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    type: 'button',
    version: 'primary',
    isDisabled: false
}

Button.propType = {
    type: PropTypes.string,
    version: PropTypes.string,
    isDisabled: PropTypes.bool,
    children: PropTypes.node
}

export default Button