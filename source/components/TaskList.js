'use strict';

var React = require('react-native');
var TaskCell = require('./TaskCell');
var TaskStore = require('../stores/TaskStore');

var {
	StyleSheet,
	ListView,
	View,
	Component
} = React;

var styles = StyleSheet.create({
	container: {
		marginTop: 65,
	}
});

class TaskList extends Component {
	constructor(props) {
		super(props);
		var data = TaskStore.getAll();
		var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.guid !== r2.guid });
		this.state = {
			data: data,
			dataSource: dataSource.cloneWithRows(data)
		};
	}

	componentWillUnmount() {
		TweetStore.removeChangeListener(this._onChange);
	}

	componentDidMount() {
		TaskStore.addChangeListener(this._onChange.bind(this));
	}

	_onChange() {
		var data = TaskStore.getAll();
		this.setState({
			data: data,
			dataSource: this.state.dataSource.cloneWithRows(data)
		});
	}

	render() {
		return (
			<ListView 
			dataSource={this.state.dataSource}
			renderRow={this.renderRow.bind(this)}>
			</ListView>
			);
	}

	renderRow(rowData, sectionID, rowID) {
		return (<TaskCell data={rowData} />);
	}
}

module.exports = TaskList;