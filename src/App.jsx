import React from "react";
import SplashPage from "./pages/SplashPage";
import LoginPage from "./pages/LoginPage";
import TopBar from "./components/TopBar";
import HomePage from "./pages/HomePage";
import PhotoPage from "./pages/PhotoPage";
import FavoritePage from "./pages/FavoritePage";
import RegisterPage from "./pages/RegisterPage";
import { Routes, Route } from 'react-router-dom';
import { getUserLogged, putAccessToken } from './utils/api';

import "./index.css";
import BottomBar from "./components/BottomBar";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authedUser: null,
      initializing: true,
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
   
  
  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken('');

  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });

  }
  
  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  render() {
    if (this.state.initializing) {
      return <SplashPage />;
    }

    if (this.state.authedUser === null) {
      return (
        <div>
          <header>
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<LoginPage onLoginSuccess={this.onLoginSuccess} />} />

              <Route path="/register" element={<RegisterPage />} />
            </Routes>
            
          </main>
        </div>
      );
    }

    return (
      <div className="flex flex-col h-screen justify-between">
        <header>
          <TopBar onLogout={this.onLogout} name={this.state.authedUser.name} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/outfits/:image" element={<PhotoPage id={this.state.authedUser.id} />} />
            <Route path="/favorites" element={<FavoritePage id={this.state.authedUser.id} />} />

          </Routes>
          
        </main>
        <footer>
          <BottomBar />
        </footer>
      </div>
    );
  }
}

export default App;