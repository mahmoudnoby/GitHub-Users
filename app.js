const gitHub = new Github;
const ui = new UI;

const searchInput = document.getElementById('searchUser');

searchInput.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  console.log(userText);
  if(userText !== '') {
    gitHub.getUser(userText)
    .then( (data) => {
      console.log(data);
      if(data.profile.message === 'Not Found') {
        //show alrt
        ui.showAlert();
      } else {
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
      console.log(data)
    })
  } else {
    // clear profile
    ui.clearProfile()
  }
});