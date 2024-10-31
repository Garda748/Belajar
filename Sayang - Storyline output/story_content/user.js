function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hcUZYhH2tq":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var currentScore = player.GetVar("Soal1");  // Ambil skor pemain
currentScore += 10;  // Tambah 10 poin untuk jawaban benar
player.SetVar("Soal1", currentScore);  // Simpan nilai skor baru

}

