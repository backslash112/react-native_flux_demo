'use strict';

var React = require('react-native');
var TaskActions = require('../actions/TaskActions');

var {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableHighlight,
	Component
} = React;

var styles = StyleSheet.create({

	container: {
		marginTop: 65,
		flexDirection: 'column',
		alignItems: 'center',
		flex: 1,
	},
	titleContainer: {
		flex: 4,
		alignSelf: 'stretch',
		justifyContent: 'center',
	},
	titleInput: {
		padding: 1,
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
		fontSize: 18,
		borderWidth: 0,
		borderColor: 'lightgray',
		borderRadius: 0,
		color: '#48bbec',
		alignSelf: 'stretch',
		flex: 1,
		height: 30
	},

	saveButtonContainer: {
		flex: 3, //1
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	saveButton: {
		height: 49, 
		backgroundColor: '#42e47e',
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 0,
		justifyContent: 'center',
		alignSelf: 'stretch'
	},
	buttonText: {
		alignSelf: 'center',
		fontSize: 18,
		color: 'white'
	}
});

class AddTask extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			titleString: ''
		};
	}
	
	render() {
		return (
			<View style={styles.container}>
			<View style={styles.titleContainer}>
			<TextInput
			ref='textInput'
			returnKeyType={'done'}
			enablesReturnKeyAutomatically={true}
			style={styles.titleInput}
			value={this.state.titleString}
			onChange={this.onTitleTextChanged.bind(this)} 
			onKeyPress={this.onKeyPress}
			blurOnSubmit={true}
			placeholder='Please enter the title'
			autoGrow={true}
			multiline={true} />
			</View>

			<View style={styles.saveButtonContainer}>
			<TouchableHighlight underlayColor='#dddddd' style={styles.saveButton}
			onPress={this.onSaveButtonPressed.bind(this)}>
			<Text style={styles.buttonText}>Save</Text>
			</TouchableHighlight>
			</View>
			</View>
			);
	}

	onTitleTextChanged(event) {
		console.log(event.nativeEvent.text);
		this.setState({ titleString: event.nativeEvent.text });
	}

	onKeyPress(event) {
		console.log(event);
	}

	onSaveButtonPressed(event) {
		TaskActions.create(this.state.titleString);
		this.props.navigator.pop();
	}
}

module.exports = AddTask;