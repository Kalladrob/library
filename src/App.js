import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BookList from './Components/BookList';
import { Title,
         Menu,
         CollapseButton,
         OverMenu,
         TitleDiv,
         Link } from './AppStyled';

class App extends Component {
  
  state = {
    isCollapsed: false
  }
  
  render = () => { 
    return(
      <>
        <OverMenu>
          <Menu collapsed = {this.state.isCollapsed}>
            <TitleDiv collapsed = {this.state.isCollapsed}>
              <Title>{this.state.isCollapsed ? `RaFB!` : `Read a Flippin' Book!`}</Title>
              <Link>Teste</Link>
              <Link>Teste</Link>
            </TitleDiv>
          </Menu>
          <CollapseButton 
            onClick={() => this.setState({isCollapsed: ! this.state.isCollapsed})}>
            {this.state.isCollapsed ? '>' : '<'}
          </CollapseButton>
        </OverMenu>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={BookList}/>
          </Switch>
        </BrowserRouter>
      </>
  )};
}

export default App;
