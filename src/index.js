import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author ="Cristiano" 
                timeAgo ="Today at 09:00 PM"
                content ="nice info"
            />
            <CommentDetail 
                author ="Sergio Ramos" 
                timeAgo ="Today at 03:00 PM"
                content ="Hi there"
            />
            <CommentDetail 
                author ="Kevin de Bryune" 
                timeAgo="Yesterday at 11:00 PM"
                content ="Welcome back sir"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
