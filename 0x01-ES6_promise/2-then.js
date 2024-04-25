export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    const msgSucc = {
      status: 200,
      body: 'success',
    };
    promise.then(() => {
      console.log('Got a response from the API');
      resolve(msgSucc);
    }).catch((error) => {
      reject(error);
    });
  });
}
