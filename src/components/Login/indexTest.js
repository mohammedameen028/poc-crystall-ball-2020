import React from 'react';

export default class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        values: [],
        fieldsArray: [],
        dpVal:0 
      };
    }
  
    handleChange(i, e) {
      this.setState({
        values: { ...this.state.values, [i]: e.target.value }
      });
    }

    handleChangeForDrop(e){
      console.log("inside!!!");
      const dpVal=parseInt(e.target.value)
      const fieldsArray1 = this.renderInput(dpVal)
      this.setState((prevState)=>{
        return{
          ...prevState,
          fieldsArray:fieldsArray1,
          dpVal
        }
      })
      console.log("dpVal::",this.state.dpVal);
      
    }

    delx=(i,e)=>{
      console.log("111", i);
      console.log("state::",this.state);
      let {fieldsArray} = this.state
      fieldsArray.splice(i,1)
      let lenA = fieldsArray.length;
      const fieldsArray1 = this.renderInput(lenA)
      console.log("len: ", fieldsArray.length);
      this.setState((prevState)=>{
        return{
          ...prevState,
          fieldsArray: fieldsArray1,
          dpVal:lenA,
        }
      })
    }

    renderInput = (dpVal) => {
      console.log("deeldeded: ", this.state.fieldsArray);
      var f;
      
          
        f =   fieldsArray.map((item, ) => {
            <div key={"K-"+ i}>
              <label>
                <div className="label">INPUT{i}</div>
                <input
                  type="text"
                  value={i}
                  onChange={this.handleChange.bind(this, i)}
                />
                <button onClick={this.delx.bind(this, i)}> X</button>
              </label>
            </div>
        });
  
         console.log("feildsArray:::",fieldsArray);
          // this.setState((prevState)=>{
          //   return {
          //     ...prevState,
          //     fieldsArray
          //   }
          // })
         return f;
      
    }
  
    render() {
        // console.log('state1221', this.state.fieldsArray )
      
      return (
        <div className="inputs" onChange={this.handleChangeForDrop.bind(this)}>
          <select>
          <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {console.log('state1221', this.state.fieldsArray )}
          INPUT {this.state.fieldsArray}
        </div>
      );
    }
  }