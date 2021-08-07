import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

//588883368652-ld7bcjt1ej1s6prh6ks96lvrlnch0mtt.apps.googleusercontent.com

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Header className="ui container" />
                <div>
                    <Route exact path="/" component={StreamList} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/edit/:id" component={StreamEdit} />
                    <Route path="/streams/delete" component={StreamDelete} />
                    <Route path="/streams/show" component={StreamShow} />
                </div>
            </Router>
        </div>
    );
};

export default App;
