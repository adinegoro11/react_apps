import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author ="Cristiano"/>
            <CommentDetail author ="Sergio Ramos" />
            <CommentDetail author ="Kevin de Bryune" />
            <CommentDetail author ="David de Gea" />
            <CommentDetail author ="Gianluigi Buffon" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
