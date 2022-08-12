let login = prompt("login");

if (login == "admin") {
  let pass = prompt("parol");

  if (pass == "12345") {
    let d = alert("e salom uzbelaga");
  } else if (pass == null) {
    let f = alert("otmena ku yana");
  } else {
    let p = alert("ne pravilno");
  }
} else if (login == null) {
  let c = alert("otmen buldi");
} else {
  let b = alert("xto ti");
}
