import React from 'react';

function Header() {
  return (
    <header className="jumbotron bg-info ">
      <div className="container text-dark shadow-lg p-3 mb-5 bg-light rounded">
        <h1 className="display-3">Flashcard-o-matic</h1>
        <p className=" font-weight-bold lead ">
          Discover The Flashcard Difference.
        </p>
      </div>
    </header>
  );
}

export default Header;
