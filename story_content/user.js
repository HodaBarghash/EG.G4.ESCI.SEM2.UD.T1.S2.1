function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MQHHVkoMJ4":
        Script1();
        break;
      case "6lZfjthZw8d":
        Script2();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzipWX1TkuIPPceBg8w_oX_6j0JR5tW-Pn_utIwJplIFOXl3zsJiboxO6Lv9HoJ_7ap/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect"),q2attempts:player.GetVar("q2attempts"),q2answeredcorrect:player.GetVar("q2answeredcorrect")})
	}
	)
}

function Script2()
{
  const url="https://script.google.com/macros/s/AKfycbyRoRBI69un_Jz3rY6p6GSnyAH8lf2qTsala-uE_hbOyaFe57HG3Na7t00Kdj_s_ibbZA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect"),q2attempts:player.GetVar("q2attempts"),q2answeredcorrect:player.GetVar("q2answeredcorrect")})
	}
	)
}

