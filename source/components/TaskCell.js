'use strict';
var React = require('react-native');

var {
	StyleSheet,
	View,
	Text,
	Component
} = React;

var styles = StyleSheet.create({
	container: {
		height: 65,
		flexDirection: 'row',
		padding: 10,
	},
	
	title: {
		fontSize: 17,
		color: 'black',
		alignSelf: 'center',
		marginLeft: 10,
		flex: 9,
		textAlign: 'left'
	},

	disclosureIndicator: {
		marginRight: 10,
		alignSelf: 'center'
	},

	separator: {
		height: 0.3,
		backgroundColor: '#C8C7CC',
		marginBottom: 0,
	}
});

class TaskCell extends Component {
	propTypes: {
		data: React.propTypes.any
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
			<View style={styles.container}>
			<Text numberOfLines={2} style={styles.title}>{this.props.data.taskTitle}</Text>
			</View>
			<View style={styles.separator} />
			</View>
			); 
	}
}

module.exports = TaskCell;