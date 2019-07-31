import React, {Component} from 'react'
import './Counter.css'
function Counter() {
    return (
      <div className="counter">
        <button>+10</button>
        <span className="count">0</span>
      </div>
    );
}

export default Counter;