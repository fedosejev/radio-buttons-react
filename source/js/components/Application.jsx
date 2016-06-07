var React = require('react');

var Application = React.createClass({

  getInitialState: function () {
    return {
      selectedOption: 'option1'
    };
  },

  handleOptionChange: function (changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  },

  handleFormSubmit: function (formSubmitEvent) {
    formSubmitEvent.preventDefault();

    console.log('You have selected:', this.state.selectedOption);
  },

  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'option1'} />
                  Option 1
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'option2'} />
                  Option 2
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'option3'} />
                  Option 3
                </label>
              </div>
              <button className="btn btn-default" type="submit">Save</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Application;
