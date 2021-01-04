import React from 'react';

// Import Modules
import { Operation } from './nodes/Operation';


// Import Styles
import './App.css';

export const Calculator = () => {
      return (
            <div className="todo-root">
                  <div className="todo-container">
                        <Operation />
                  </div>
            </div>
      );
}