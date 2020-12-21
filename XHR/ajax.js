// XHR
const $xhr = document.getElementById("xhr"),
  $fragment = document.createDocumentFragment();
(() => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;

      xhr.status >= 200 && xhr.status < 300
        ? resolve(JSON.parse(xhr.responseText))
        : reject(xhr);
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.send();
  });
})()
  .then((json) => {
    json.forEach((it) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${it.name} -- ${it.email}`;
      $fragment.appendChild($li);
    });
    $xhr.appendChild($fragment);
  })
  .catch((err) => console.log(err));

// FETCH

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
    .then((response) =>
      response.ok ? response.json() : Promise.reject(response)
    )
    .then((json) => {
      //console.log(json);
      json.forEach((it) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${it.name} -- ${it.email}`;
        // Se usa el Fragmento Para realizar solo una insercion
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err);
      let message = err.statusText || "Ocurrio un Error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    });
})();

// FETCH + Async

(() => {
  const $fetchAsync = document.getElementById("fetchAsync"),
    $fragment = document.createDocumentFragment();

  const getData = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      //console.log(res, json);
      if (!res.ok) throw { status: res.status, statusTect: res.statusText };

      json.forEach((element) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${element.name} -- ${element.email}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      //console.log(err);
      let message = err.statusText || "Ocurrio un Error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    }
  };

  getData();
})();
