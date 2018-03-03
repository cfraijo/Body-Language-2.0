import React, { Component } from 'react';
import './css/App.css';
var watsonEmotion = require("ToneResults");

class App extends Component {
  render() {
    return (
       <p><strong>Many text</strong>go misunderstood beacuase of the emotionlessness of text, we are here to help with that.</p>
      <p>How are you feelin today? Type your thoughts, press the button. We will do the rest.</p>
      <p class="w3-right">
          <form>
              <div class="w3-row-padding">
                  <div class="w3-col m12">
                    <div class="w3-card w3-round w3-white">
                      <div class="w3-container w3-padding">
                        <h6 class="w3-opacity">Lets See Some Emotion</h6>
                        <input contenteditable="true" class="w3-border w3-padding" id="emotionalText">We are going to apply some Body Language</p>
                        <button type="button" onClick="PasteText()" id="emoCheck" class="w3-button w3-theme"><i class="fa fa-pencil"></i>  Show Emotion</button> 
                        <input type="text" id="translatedText"><h3>ToneResults</h3><br><br>
                        <Add />
                      </div>
                    </div>
                  </div>
                </div>
              </form> 
    );
  }
}
}
export default App;
module.export = WatsonText;