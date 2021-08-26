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
  }
  else{
    var nimi = document.getElementById('nimi').value
    var tieto = document.getElementById('tieto').value
    console.log('nimikentässä ja tietokentässä oli tekstiä');
    document.getElementById('infodiv').className="infod"
    document.getElementById('infodiv').textContent= nimi + ': ' + tieto
  }
  //console.log(document.getElementById('nimi').value);
}