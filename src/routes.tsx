import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from './views/pages/Home';
import Contact from './views/pages/Contact';
import Login from './views/pages/Login';
import Painel from "./views/pages/Painel";
import PrivateRoutes from "./private.routes";

const Routes: React.FC = () => {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <PrivateRoutes path="/painel" exact component={Painel} />
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;