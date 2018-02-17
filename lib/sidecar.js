"use strict";

var displayArea = require('@nteract/display-area');
var React = require('react');
var ReactDOM = require('react-dom');

class Sidecar {
  constructor() {

  }

  consume(event, message) {
    console.log(message);
    if (message.content.data) {
      var op = Object.assign({}, message.content, {
          output_type: message.header.msg_type
      });
      var elem = React.createElement(displayArea.Display, {outputs: [op]}, []);
      ReactDOM.render(elem, document.getElementById("root"));
    }
  }
 }


module.exports = Sidecar;
