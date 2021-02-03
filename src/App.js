import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { HomePage } from "./components/pages/home-page";

// class App extends Component {
//   render() {
//     let routes = (
//       <Switch>
//         <Route path="/" exact component={HomePage} />
//         <Redirect to="/" />
//       </Switch>
//     );

//     return { routes };
//   }
// }

// export default withRouter(App);

const App = () => (
  <Router>
    <Suspense fallback={<div>Загрузка...</div>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
