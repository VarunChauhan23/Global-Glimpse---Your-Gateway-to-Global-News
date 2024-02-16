import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar Component/NavBar';
import News from "./components/News Components/News";
import SignUpPage from "./components/Authentication/SignUpPage";
import LoginPage from "./components/Authentication/LoginPage";
import VerifyEmailPage from "./components/Authentication/VerifyEmailPage";
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import notify from "./components/Other Components/Notification";

export class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: 'light',
      progress: 0
    };
  }

  setProgress = (progress) => {
    this.setState({progress: progress});
  }

  handleDarkMode = () => {

    if (this.state.mode === 'light') {
      this.setState({
        mode: 'dark'
      });
      document.body.style.backgroundColor = "#33628d";
      notify("Dark mode enabled", "success", "dark");
    } else {
      this.setState({
        mode: 'light'
      });
      document.body.style.backgroundColor = "white";
      notify("Dark mode disabled", "success", "light");
    }
  }

  render() {
    return (
      <Router>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
        <Navbar mode={this.state.mode} toggleMode={this.handleDarkMode} setProgress={this.setProgress} />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<News setProgress={this.setProgress}  mode={this.state.mode} key="general" pageSize="10" category="general" />} />
          <Route path='/business' element={<News setProgress={this.setProgress}  mode={this.state.mode} key="business" pageSize="10" category="business" />} />
          <Route path='/entertainment' element={<News setProgress={this.setProgress}  mode={this.state.mode} key="entertainment" pageSize="10" category="entertainment" />} />
          <Route path='/health' element={<News setProgress={this.setProgress}  mode={this.state.mode} key="health" pageSize="10" category="health" />} />
          <Route path='/science' element={<News setProgress={this.setProgress}  mode={this.state.mode} key="science" pageSize="10" category="science" />} />
          <Route path='/sports' element={<News setProgress={this.setProgress}  mode={this.state.mode} key="sports" pageSize="10" category="sports" />} />
          <Route path='/technology' element={<News setProgress={this.setProgress}  mode={this.state.mode} key="technology" pageSize="10" category="technology" />} />
          <Route path="/SignUp" element={<SignUpPage setProgress={this.setProgress}  mode={this.state.mode} />} />
          <Route path="/verifyEmail/:userId" element={<VerifyEmailPage setProgress={this.setProgress}  mode={this.state.mode} />} />
          <Route path="/Login" element={<LoginPage setProgress={this.setProgress}  mode={this.state.mode} />} />
        </Routes>
      </Router>
    )
  }
}

export default App
