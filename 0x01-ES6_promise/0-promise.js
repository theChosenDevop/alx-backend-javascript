export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const data = 'foo';
    setTimeout(() => { resolve(data);
    }, 1000)
  })
}
