function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  const option = {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  };
  return fetch(url, option);
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    result.json().then(data => document.writeln(data.name));
    // document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
