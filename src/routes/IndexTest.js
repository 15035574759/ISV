import React from 'react';
import { connect } from 'dva';

function IndexTest() {
  return (
    <div>
      <h1>Hello Word</h1>
    </div>
  );
}

IndexTest.propTypes = {
};

export default connect()(IndexTest);
