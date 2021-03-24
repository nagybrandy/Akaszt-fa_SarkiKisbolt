var words = ["szavak", "nagyon", "jok"];
var random = Math.floor(Math.random() * (words.length)); 
var megoldas = words[random];
var megoldnyilv = "";
var hibak = 0;
var hibalista = []

console.log(megoldas[0])
for(var i = 0; i < megoldas.length; i++) {
  megoldnyilv += "_";
}
var feladva = document.getElementById("feladv") 
feladva.innerHTML = "A feladvány: " + megoldnyilv


function Tipp(char){
  if(hibalista.indexOf(document.getElementById("megoldas").value) != -1){
    alert("Ezt már egyszer tippelted és akkor sem volt jó! :c")
  } else {
    if(document.getElementById("megoldas").value.length == 1){
      var van = false
      var kar = document.getElementById("megoldas").value;
      for(var i = 0; i < megoldas.length;i++) {
        if(kar == megoldas[i]){
          megoldnyilv = megoldnyilv.substring(0,i) + kar + megoldnyilv.substring(i+1,megoldas.length)
          feladva.innerHTML = "A feladvány: " + megoldnyilv
          console.log(megoldnyilv)
          van = true;
        }
      }
        if(!van){
        alert("Ez a karakter nem szerepel a szóban!")
        hibalista.push(document.getElementById("megoldas").value)
        var hibalistaelem = document.getElementById("hibalista") 
        hibalistaelem.innerHTML += hibalista[hibak] + ", "
        hibak++
        var hibakelem = document.getElementById("hibak") 
        hibakelem.innerHTML = "Hibás tippek száma: " + hibak
        if(hibak==11){
          alert("Vesztettél! :(")
          document.getElementById("kuldes").disabled = true;
        }
      }
      if(megoldas == megoldnyilv){
            alert("Győztél!")
      }
    
    }
    else {
      alert("Írj be valamit!")
    }
  }
}

console.log(megoldnyilv)