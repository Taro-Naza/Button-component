import React from 'react';
import './Button.css';
import { ReactComponent as Icon } from '@material-design-icons/svg/outlined/add_shopping_cart.svg';

import PropTypes from 'prop-types';

function Button({
	variant,
	disableShadow,
	disabled,
	startIcon,
	endIcon,
	size,
	color,
}) {
	let styles = ['button', size, color];

	!variant &&
		!disableShadow &&
		!startIcon &&
		!endIcon &&
		styles.push('default');
	variant === 'outline' && styles.push('outline');
	variant === 'text' && styles.push('text');

	disableShadow && styles.push('disable-shadow');

	disabled && styles.push('disabled');

	(startIcon || endIcon) && styles.push('icon');
	endIcon && styles.push('end-icon');
	console.log(startIcon);

	return (
		<>
			<button className={styles.join(' ')} disabled={disabled}>
				{(startIcon || endIcon) && <Icon />}
				<span>Default</span>
			</button>
		</>
	);
}

export default Button;

Button.propTypes = {
	variant: PropTypes.string,
	disableShadow: PropTypes.bool,
	disabled: PropTypes.bool,
	startIcon: PropTypes.string,
	endIcon: PropTypes.string,
	size: PropTypes.string,
	color: PropTypes.string,
};
