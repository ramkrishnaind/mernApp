import React from 'react';

import SnackbarContext from '../context/SnackbarContext';
import Snackbar from '../components/Snackbar/Snackbar';

function contextHOC(HocComponent) {
    return class extends React.Component {
        state = {
            active: false,
            type: "error",
            text: "",
            timeout: 4000
        }
        setSnackbar = (data) => {
            console.log('calling set snackbar', data);
            this.setState(data);
        }
        render() {
            let snackbarVal = {
                snackbarData: this.state,
                setSnackbar: this.setSnackbar
            };
            return (
                <div>
                    <SnackbarContext.Provider value={snackbarVal}>
                        <Snackbar
                            active={this.state.active}
                            text={this.state.text}
                            type={this.state.type}
                            timeout={this.state.timeout}
                            closeSnackBar={this.setSnackbar}
                        />
                        <HocComponent {...this.props}></HocComponent>
                    </SnackbarContext.Provider>
                </div>

            );
        }
    }
}

export default contextHOC;