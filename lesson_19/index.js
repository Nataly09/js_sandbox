

function main() {
    let data;
  
    return fetch(`https://api.exchangeratesapi.io/latest`)
      .then((resp) => {
          return resp.json();
      })
      .then(result => data = result)
      .then(() => new Promise(resolve => setTimeout(resolve, 1000)))
      .then(() => {
        //   alert(`Yeah, ${JSON.stringify(data)}`);
      });
  }

  

// main()
// .then (() => console.log('Done'));


async function amain() {
    let data;
  
     fetch(`https://api.exchangeratesapi.io/latest`)
      .then((resp) => {
          return resp.json();
      })
      .then(result => data = result)
      .then(() => new Promise(resolve => setTimeout(resolve, 1000)))
      .then(() => {
          alert(`Yeah, ${JSON.stringify(data)}`);
      });
  }


  console.log(amain())
  

