import React from 'react';
import ReactDOM from 'react-dom';
import AssignForm from './dashboard/assignForm'
import InputWithSuggest from './dashboard/inputWithSuggest'

//test that state-less components renders

it('renders AssignForm without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AssignForm />, div);
});


it('renders InputWithSuggest without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputWithSuggest />, div);
});
