/** @jsx React.DOM */
define(function (require) {

var React = require('react');

var TodoApp = require('jsx!components/TodoApp.react');

React.render(
  <TodoApp />,
  document.getElementById('todoapp')
);

});