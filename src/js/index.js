// noinspection SpellCheckingInspection

const invokeApi = async (ip, username = 'admin', password = 'td27fk78') => {
  const url = `http://${ip}/fcgi/do?action=OpenDoor&UserName=${username}&Password=${password}&DoorNum=1`
  
  await fetch(url, {
    headers: {'Access-Control-Allow-Origin': '*'},
    credentials: "omit",
    mode: 'no-cors'
  })
}

const callSIP = async (callID) => {
  const sip = `sip:${callID}@sip.digisonic.com.br`
  
  await fetch(sip, {
    headers: {'Access-Control-Allow-Origin': '*'},
    credentials: "omit",
    mode: 'no-cors'
  })
}