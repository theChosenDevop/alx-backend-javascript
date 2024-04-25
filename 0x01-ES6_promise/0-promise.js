export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    const data = 'foo';
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}
