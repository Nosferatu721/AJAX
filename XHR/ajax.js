(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log("Exito");
      //console.log(xhr.responseText)
      let json = JSON.parse(xhr.responseText);
      console.log(json);

      json.forEach((it) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${it.name} -- ${it.email}`;
        // Se usa el Fragmento Para realizar solo una insercion
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      console.log(xhr);
      let messageError = xhr.statusText || "Ocurrio un Error";
      $xhr.innerHTML = `Error ${messageError}.`;
    }
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();
})();
