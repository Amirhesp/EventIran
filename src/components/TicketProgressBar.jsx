import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const styles = {
  root: {
    flexGrow: 1,
  },
};
const theme = createMuiTheme({
  palette: {
    primary: { main: blueGrey[100] }, // Purple and green play nicely together.
  },
});
class TicketProgressBar extends Component {
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  timer = null;

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 5;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <LinearProgress variant="determinate" value={this.state.completed}  color='primary' className="buttonColor"/>
          <br />
        </div>
      </MuiThemeProvider>
    );
  }
}

TicketProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TicketProgressBar);
