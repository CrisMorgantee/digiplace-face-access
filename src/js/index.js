// noinspection SpellCheckingInspection

const invokeApi = async (ip, target = null, username = 'admin', password = 'td27fk78') => {
  const url = `http://${ip}/fcgi/do?action=OpenDoor&UserName=${username}&Password=${password}&DoorNum=1`
  const unlockIcon = document.querySelector(`#unlock-icon-${target}`)
  const lockIcon = document.querySelector(`#lock-icon-${target}`)
  
  lockIcon.classList.add('hidden')
  unlockIcon.classList.remove('hidden')
  
  await fetch(url, {
    headers: {'Access-Control-Allow-Origin': '*'},
    credentials: "omit",
    mode: 'no-cors'
  })
  
  setTimeout(() => {
    lockIcon.classList.remove('hidden')
    unlockIcon.classList.add('hidden')
  }, 6500)
}