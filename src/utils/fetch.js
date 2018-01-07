import 'whatwg-fetch';
// import { Toast } from 'antd-mobile';
import querystring from 'querystring';
const credentials = 'same-origin';

export default async (args) => {
  const p = {
    method: 'get',
    url: '',
    param: {},
    headers: {},
    loading: true,
    ...args
  };

  // if (p.loading) {
  //   Toast.loading('loading...', 9999999999, f => f, false);
  // }

  try {
    let f;
    if (p.method.toLowerCase() === 'get') {
      f = await fetch(`${p.url}?${querystring.stringify(p.param)}`, {
        credentials: credentials,
        headers,
      });
    } else if (p.method.toLowerCase() === 'post') {
      f = await fetch(p.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...p.headers,
        },
        redirect: 'follow',
        body: JSON.stringify(p.param),
        credentials: credentials
      });
    } else {
      return false;
    }
    const jsonRes = await f.json().catch(err => console.log(err));

    return jsonRes;

  } catch (ex) {
    console.log(`%c[${p.method} fail] ${p.url}`, `color:#f24040;font-weight:600;`);
    console.log(`%c${ex}`, `color:#f24040;font-weight:600;`);
    // Toast.offline('Network Error.');
  }

}
