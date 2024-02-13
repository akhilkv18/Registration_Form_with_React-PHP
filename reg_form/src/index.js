import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import First from './components/form';
import Second from './components/view';

const App = () => {
  // State to hold the submitted user data
  const [userData, setUserData] = useState(null);

  return (
    <div>
      {/* Conditional rendering: Render First component if userData is null, else render Second component */}
      {!userData ? <First setUserData={setUserData} /> : <Second userData={userData} />}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));