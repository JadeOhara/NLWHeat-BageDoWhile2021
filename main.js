const LinksSocialMedia = {
  github: 'jadeohara',
  youtube: 'channel/UCZyuqeE6bhcAYpkwXS22nFA',
  facebook: 'jadeoharam92',
  instagram: 'jadeohara',
  twitter: 'jade_ohara'
}

function changeSocialMediaLinks() {
  //DOM
  //document.getElementById('userName').textContent = 'Jade Ohara'

  // github.href = `https://github.com/${LinksSocialMedia.github}`

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

  }
}

function  getGitHubProfileInfos(){
  const  url = `https://api.github.com/users/${LinksSocialMedia.github}`

  //fetch() pega o objeto da api
  fetch(url)
    .then(responseURL => responseURL.json())
    .then(dataJSON => {
      userName.textContent = dataJSON.name
      userBio.textContent = dataJSON.bio
      github.href = dataJSON.html_url
      userImage.src = dataJSON.avatar_url
      userLogin.textContent = dataJSON.login
    })
}

changeSocialMediaLinks()
getGitHubProfileInfos()


//PROMISE
//promise verifica se deu  certo de pegar a resposta e então .then ele faz algo
//Você pode ter mais de uma resposta
//Cada .then pega a resposta do .then anterior


// FUNCTION
// function  nomeDaFuncao(argumento1,argumento2)


// ARROW FUNCTION  = FUNÇÃO  ANÔNIMA  (NÃO TEM NOME)
//forma contraída da função

// argumento => {} //1 argumento

// (argumento1,argumento2) => {} //mais de 1 argumento

// () => {}  //vazia
