import React, {Component, PropTypes} from 'react';
import Divider from 'material-ui/Divider';

class MobileTearSheet extends Component {

  static propTypes = {
    children: PropTypes.node,
    height: PropTypes.number.isRequired,
  };

  static defaultProps = {
    height: 600,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      prepareStyles,
    } = this.context.muiTheme;

    const styles = {
      root: {
        marginBottom: 24,
        maxWidth: '100%',
        width: '100%',
      },
      container: {
        border: 'solid 1px #d9d9d9',
        borderBottom: 'none',
        height: this.props.height,
        overflow: 'hidden',
      },
      bottomTear: {
        display: 'block',
        position: 'relative',
        marginTop: -10,
        maxWidth: 360,
      },
    };

    return (
      <div style={prepareStyles(styles.root)}>
        <div style={prepareStyles(styles.container)}>
          {this.props.children}
        </div>
<Divider/>
      </div>
    );
  }
}

export default MobileTearSheet;