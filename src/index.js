import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author ="Cristiano" 
                    timeAgo ="Today at 09:00 PM"
                    content ="nice info"
                    avatar ={faker.image.avatar()}
                />
            </ApprovalCard>
           
            <CommentDetail 
                author ="Sergio Ramos" 
                timeAgo ="Today at 03:00 PM"
                content ="Hi there"
                avatar ={faker.image.avatar()}
            />
            <CommentDetail 
                author ="Kevin de Bryune" 
                timeAgo="Yesterday at 11:00 PM"
                content ="Welcome back sir"
                avatar ={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
