import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  handeSubmit= (e) => {
    e.preventDefautl();

    const { createTodo } = this.props;
    const { content } = this.state;

    if (!content) {
      return;
    }

    onCreateTodo(content);
    this.clearContent();
  };

  handleChangeContent = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  clearContent = () => {
    this.setState({
      content: '',
    });
  };

  render() {
    const { content } = this.state;

    return (
      <div className='todo-form-container'>
        <form onSubmit={this.handeCreateTodo}>
          <input
            type='text'
            placeholder='What need to be done?'
            onChange={this.handleChangeContent}
            value={content}
          />
        </form>
      </div>
    );
  }
}

TodoForm.propTypes = {
};

export default TodoForm;
