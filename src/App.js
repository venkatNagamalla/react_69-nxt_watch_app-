import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Context from './context/Context'
import Trending from './components/Trending'
import ProtectedRoute from './components/ProtectedRoute'
import Gaming from './components/Gaming'
import Video from './components/Video'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here

class App extends Component {
  state = {theme: false, activeRoute: 'HOME'}

  changeTheme = () => this.setState(prevState => ({theme: !prevState.theme}))

  changeActiveRoute = id => {
    localStorage.setItem('route', JSON.stringify(id))
    this.setState({activeRoute: id})
    console.log(localStorage.getItem('route'))
  }

  render() {
    const {theme, activeRoute} = this.state
    return (
      <Context.Provider
        value={{
          theme,
          changeTheme: this.changeTheme,
          activeRoute,
          changeActiveRoute: this.changeActiveRoute,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={Video} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
