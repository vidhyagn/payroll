import React, {Component} from 'react';
import {Scrollbars} from 'react-custom-scrollbars';

class ScrollBar extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {top: 0};
        this.handleUpdate = this.handleUpdate.bind(this);
        this.renderView = this.renderView.bind(this);
        this.renderThumb = this.renderThumb.bind(this);
    }

    handleUpdate(values) {
        const {top} = values;
        this.setState({top});
    }

    renderView({style, ...props}) {
        const viewStyle = {
            padding: 0,
            backgroundColor: this.props.bColor !== undefined ? this.props.bColor : "transparent",
            color: this.props.tColor !== undefined ? this.props.tColor : ""
        };
        return (
            <div
                className="box"
                style={{...style, ...viewStyle}}
                {...props}/>
        );
    }

    renderThumb({style, ...props}) {
        const thumbStyle = {
            backgroundColor: this.props.sColor !== undefined ? this.props.sColor : `rgba(0, 0, 0, 0.2)`,
            borderRadius: `5px`
        };
        return (
            <div
                style={{...style, ...thumbStyle}}
                {...props}/>
        );
    }

    render() {
        return (
            <Scrollbars
                renderView={this.renderView}
                renderThumbHorizontal={this.renderThumb}
                renderThumbVertical={this.renderThumb}
                onUpdate={this.handleUpdate}
                {...this.props}/>
        );
    }
}


export default (ScrollBar);


