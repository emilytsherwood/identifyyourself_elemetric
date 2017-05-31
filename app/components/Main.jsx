import * as React from 'react';
import { LandingPage } from './children/LandingPage';
import { InputQuestion } from './children/InputQuestion';
import { MultiQuestion } from './children/MultiQuestion';
import { PicQuestion } from './children/PicQuestion';
import { DisplayAnswers } from './children/DisplayAnswers';

class Main extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export { Main };


