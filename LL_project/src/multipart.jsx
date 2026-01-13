import React, { Component } from "react";
class MultiPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: "",//textbox1
      t2: "",//textbox2
      t3: "",//textbox3
      t4: "",//radiobox1
      t5: "",//city dropdown1
      t6: false,//branch checkbox1
      t7: "#000000",// color colorpicker1
      t8: "",// dob  date datepicker1
      t9: "",// about you textarea1
      index: 0,
    };
  }
  onclicknext = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };
  onclickprevious = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
  };
  render() {
    const { t1, t2, t3, t4, t5, t6, t7, t8, t9, index } = this.state;
    return (
      <div>
        <div style={{ display: index === 0 ? "" : "none" }}>
          <h1>Part1</h1>
          <input
            type="text"
            value={t1}
            placeholder="First Name"
            onChange={(e) => this.setState({ t1: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t2}
            placeholder="Last Name"
            onChange={(e) => this.setState({ t2: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t3}
            placeholder="Mobile Number"
            onChange={(e) => this.setState({ t3: e.target.value })}
          />
          <br />
        </div>
        <div style={{ display: index === 1 ? "" : "none" }}>
          <h1>Part2</h1>
          <div>
            <label>Gender:</label>
            <input
              type = "radio"
              name = "gender"
              value = "male"
              checked = {t4 === "male"}  
              onChange = {(e) => this.setState({t4: e.target.value})}
            /> Male
            <input
              type="radio"
              name="gender"
              value="female"
              checked={t4 === "female"}
              onChange={(e) => this.setState({ t4: e.target.value })}
            /> Female
          </div>
          <br />
          <div>
            <label>City:</label>
            <select //dropdown
              value={t5}
              onChange={(e) => this.setState({ t5: e.target.value })}
            >
              <option value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>
          <br />
          <div>
            <label>
              <input
                type="checkbox"
                checked={t6}
                onChange={(e) => this.setState({ t6: e.target.checked })}
              /> Computer Science Branch
            </label>
          </div>
          <br />
        </div>
        <div style={{ display: index === 2 ? "" : "none" }}>
          <h1>Part3</h1>
          <div>
            <label>Favorite Color:</label>
            <input
              type="color"
              value={t7}
              onChange={(e) => this.setState({ t7: e.target.value })}
            />
          </div>
          <br />
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              value={t8}
              onChange={(e) => this.setState({ t8: e.target.value })}
            />
          </div>
          <br />
          <div>
            <label>About You:</label>
            <textarea
              value={t9}
              onChange={(e) => this.setState({ t9: e.target.value })}
              rows="4"
              cols="50"
        /> 
          </div>
          <br />
        </div>
        <div>
          <button disabled={index === 2} onClick={this.onclicknext}>
            Next
          </button>
          <button disabled={index === 0} onClick={this.onclickprevious}>
            Previous
          </button>
        </div>
        <div>
          <div>{t1}</div>
          <div>{t2}</div>
          <div>{t3}</div>
        </div>
        <div>
          <div>{t4}</div>
          <div>{t5}</div>
          <div>{t6 ? "Yes" : "No"}</div>
        </div>
        <div>
          <div>{t7}</div>
          <div>{t8}</div>
          <div>{t9}</div>
        </div>
      </div>
    );
  }
}
export default MultiPart;
