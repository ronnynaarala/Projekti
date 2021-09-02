function Virhe(){
  if ((document.getElementById('nimi').value=="") || (document.getElementById('tieto').value=="")){
    console.log('nimikentässä tai tietokentässä ei ollut tekstiä');
    document.getElementById('tietonappi').className="b1f"
    document.getElementById('tietonappi').textContent="Virhe! Et lisännyt tietoa."
    document.getElementById('virhediv').className="virhe"
    document.getElementById('virhediv').textContent="Täytä kaikki kentät"
    setTimeout(function(){
      document.getElementById('tietonappi').className="b1"
      document.getElementById('tietonappi').textContent="Lisää tieto"
      document.getElementById('virhediv').className=""
      document.getElementById('virhediv').textContent=""
    }, 3000);
  } else {
    var nimi = document.getElementById('nimi').value
    var tieto = document.getElementById('tieto').value
    console.log('nimikentässä ja tietokentässä oli tekstiä');
    document.getElementById('infodiv').className="infod"
    document.getElementById('infodiv').textContent= nimi + ': ' + tieto
  }
  //console.log(document.getElementById('nimi').value);
}
function Merkkaus(){
  if (document.getElementById('HTML').checked){
    console.log("hmtl on")
    document.getElementById('HTML1').textContent= "HTML tunnit pidetty"
  }
  if (document.getElementById('CSS').checked){
    console.log("css on")
    document.getElementById('CSS1').textContent= "CSS tunnit pidetty"
  }
  if (document.getElementById('JS').checked){
    console.log("JavaScript on")
    document.getElementById('JS1').textContent= "JavaScript tunnit pidetty"
  }
  if (document.getElementById('CICD').checked){
    console.log("CI/CD on")
    document.getElementById('CICD1').textContent= "CI/CD tunnit pidetty"
  }
  if (!document.getElementById('HTML').checked && !document.getElementById('CSS').checked && !document.getElementById('JS').checked && !document.getElementById('CICD').checked){
    console.log("ei ole :(")
  }

}