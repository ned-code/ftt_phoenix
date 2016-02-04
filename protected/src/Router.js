'use strict';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

export default(req, res) => {

    //const html = renderToString(<Provider store={store} />);
    const html = "";
    res.send(html);
};


