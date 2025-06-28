// Write an async function that fetches data
// from a fake API (e.g., jsonplaceholder.typicode.com/users) using fetch.

function fetchData(API_url) {
  const user = { id: 5, name: "John Doe" };
  let { id, name } = user;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched from " + API_url + " for user: " + name);
    }, 2000);
  });
}

async function processData() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const data = await fetchData(url);
    console.log(data);
  } catch (error) {
    console.error("Error: ", error);
  }
}

processData();
