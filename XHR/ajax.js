(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Exito");
      //console.log(xhr.responseText)
      let json = JSON.parse(xhr.responseText);
      console.log(json);
      json.forEach((it) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${it.name}`;
        $xhr.insertAdjacentElement("afterbegin", $li);
      });
    } else {
      console.log("Exito");
    }
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();
})();
