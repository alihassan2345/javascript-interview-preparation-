function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data got it");
    }, 3000);
  });
}

async function getData(){
    const data = await fetchData()
    console.log(data)
}

getData()