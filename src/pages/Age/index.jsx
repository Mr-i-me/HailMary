import React from "react";
import { useHistory } from 'react-router-dom';

import "./style.scss";

const Age = props => {
  const history = useHistory();

  return (
    <div className="AgeContainer">
      <main className="AgeWrapper">
        <div className="AgeContent">
          <section>
            <p style={{
                textAlign: 'center',
                fontFamily: 'Permanent Marker',
                fontSize: 36,
              }}
            >
              Qual a sua idade?
            </p>

            <div className="AgeButtons">
              <button onClick={() => history.push('/home')}>+21</button>
              <button>-21</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Age;
