import 'whatwg-fetch';
import { Toast } from 'antd-mobile';
import querystring from 'querystring';
const credentials = 'include';

export default async (args) => {
  const p = {
    method: 'get',
    url: '',
    param: {},
    loading: true,
    ...args
  };

  if (p.loading) {
    Toast.loading('loading...', 9999999999, f => f, false);
  }

  try {
    let f;
    if (p.method.toLowerCase() === 'get') {
      f = await fetch(`${p.url}?${querystring.stringify(p.param)}`, {
        credentials: credentials
      });
    } else if (p.method.toLowerCase() === 'post') {
      f = await fetch(p.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify(p.param),
        credentials: credentials
      });
    } else {
      return false;
    }
    const jsonRes = await f.json();
    if (jsonRes.errno === 200) {
      return jsonRes;
    } else {
      Toast.offline('Network Error.');
      return null;
    }

  } catch (ex) {
    console.log(`%c[${p.method} fail] ${p.url}`, `color:#f24040;font-weight:600;`);
    console.log(`%c${ex}`, `color:#f24040;font-weight:600;`);
    Toast.offline('Network Error.');
  }

}
