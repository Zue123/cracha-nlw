const linksSocialMedia = {
  github: 'Zue123',
  youtube: 'dQw4w9WgXcQ',
  facebook: 'josue.leite.92',
  instagram: 'zue.leite',
  twitter: 'Zuue_'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Zue';
  // =
  //userName.textContent = 'Zuue'

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfilesInfos()
