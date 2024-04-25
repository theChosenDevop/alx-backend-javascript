export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const msgSucc = {
      status: 200,
      body: 'Success',
    };
    const msgFail = 'The fake API is not working currently';
    if (success) {
      resolve(msgSucc);
    } else {
      reject(new Error(msgFail));
    }
  });
}
