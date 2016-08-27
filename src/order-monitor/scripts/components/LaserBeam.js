import { Component, PropTypes } from 'react';
import classnames from 'classnames';

class LaserBeam extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        	style: {
				position: 'fixed',
				top: '0',
				left: '0',
				zIndex: '999',
				width: '0',
				height: '2px',
				background: '#52a0da',
				boxShadow: '0 1px 10px #52a0da',
				transitionProperty: 'width',
				transitionDuration: '0ms'
        	}
        };
    }

    componentWillReceiveProps(nextProps) {
    	const { show } = nextProps;
    	const { style } = this.state;
    	const self = this;
    	let changedStyle;

    	if (show) {
    		changedStyle = Object.assign({}, style, {
    			width: '70%',
    	    	transitionDuration: '10000ms',
				transitionTimingFunction: 'cubic-bezier(0, 1, 0, 1)'
    		});
    	} else {
    		changedStyle = Object.assign({}, style, {
    			width: '100%',
    	    	transitionDuration: '300ms',
				transitionTimingFunction: 'linear'
    		});
    		window.setTimeout(function() {
	    		changedStyle = Object.assign({}, style, {
	    			width: '0',
	    	    	transitionDuration: '0ms'
	    		});
				self.setState({
					style: changedStyle
				});
    		}, 300);
    	}
		this.state = {
			style: changedStyle
		};
    }

    render() {
    	const { style } = this.state;

        return (
        	<div style={style}></div>
        );
    }
}

LaserBeam.propTypes = {
  	show: PropTypes.bool.isRequired
};

export default LaserBeam;