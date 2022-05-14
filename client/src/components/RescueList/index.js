import React from 'react';
import { Link } from 'react-router-dom';

const RescueList = ({
  messages,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!messages.length) {
    return <h3>No Messages Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {messages &&
        messages.map((message) => (
          <div key={message._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${message.messageAuthor}`}
                >
                  {message.messageAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this thought on {message.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this thought on {message.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{message.messageText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RescueList;
