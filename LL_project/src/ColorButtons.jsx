import React, { Component } from 'react';

class ColorButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['green', 'blue', 'yellow', 'red', 'green', 'blue', 'yellow', 'red']
    };
  }

  changeColor = (index) => {
    const colorOptions = ['green', 'blue', 'yellow', 'red'];
    const newColors = [...this.state.colors];
    const currentIndex = colorOptions.indexOf(newColors[index]);
    const nextIndex = (currentIndex + 1) % colorOptions.length;
    newColors[index] = colorOptions[nextIndex];
    this.setState({ colors: newColors });
  };

  render() {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', padding: '20px' }}>
        {this.state.colors.map((color, index) => (
          <button
            key={index}
            onClick={() => this.changeColor(index)}
            style={{
              backgroundColor: color,
              color: 'white',
              border: 'none',
              padding: '20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            {color}
          </button>
        ))}
      </div>
    );
  }
}

export default ColorButtons;