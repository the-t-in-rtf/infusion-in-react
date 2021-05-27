import React from 'react';
import fluid from './fluid';

var my = fluid.registerNamespace("my");
fluid.defaults("my.fluidComponent", {
    gradeNames: ["fluid.viewComponent"],
    listeners: {
        "onCreate.render": {
            funcName: "my.fluidComponent.render",
            args: ["{that}"]
        }
    }
});

my.fluidComponent.render = function (that) {
    that.container.html("I like foods like " + that.options.food + ".");
};

export default class FluidComponent extends React.Component {
    constructor (props) {
        super(props);
        this.className = "fluid-component-" + Date.now() + "-" + Math.round(Math.random() * 1000);
    }

    componentDidMount() {
        this.component = my.fluidComponent("." + this.className, this.props.options);
    }

    render() {
        return(<p className={this.className}></p>);
    }
}