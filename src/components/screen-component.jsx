import React from "react"
import { connect } from "react-redux"

class ScreenComponent extends React.Component {
    static mapStateToProps(state) {
        return JSON.parse(JSON.stringify(state))
    }

    static mapDispatchToProps(dispatch) {
        var result = {}
        return result
    }

    render() {
        return (<div className="screen">
            {this.props.error != null && this.renderError()}
            {this.props.error == null && this.renderResult()}
        </div>)
    }

    renderResult() {
        return (<div>
            <div>
                {this.props.operator != null && this.props.result}
            </div>
            <div>
                {this.props.operator}
            </div>
            <div>
                {this.props.number}
            </div>
        </div>)
    }

    renderError() {
        return (<div>
            {this.props.error}
        </div>)
    }
}
export default connect(ScreenComponent.mapStateToProps, ScreenComponent.mapDispatchToProps)(ScreenComponent)