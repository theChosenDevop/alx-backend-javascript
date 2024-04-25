export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise.then(() => {
      console.log('Got a response from the API');
      resolve({
        status: 200,
        body: 'success',
      });
    }).catch((error) => {
      reject(error);
    });
  });
}
