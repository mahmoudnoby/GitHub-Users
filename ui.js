class UI {
  constructor() {
    this.profile = document.getElementById('user-profile-container');
  }
  //show Users Resalut
  showProfile(user) {
    console.log(user)
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <img src="${user.avatar_url}" alt="" srcset="" class="img-fluid mb-2">
        <a href="${user.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block mb-2">View Profile</a>
      </div>
      <div class="col-md-9">
        <span class="badge badge-danger">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-info">Follwers: ${user.followers}</span>
        <span class="badge badge-success">Following: ${user.following}</span>
        <br/><br/>
        <ul class="list-group">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website/Blog: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
      </div>
    </div>
  </div>
  <h3 class="page-heading mb-3">Latest Repos</h3>
  <div id="repos"></div>
    `
  }

  //Show Repos
  showRepos(repos) {
    let reposContainer = '';
    repos.forEach(ele => {
      reposContainer += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${ele.html_url}" target="_blank" rel="noopener noreferrer">${ele.name}</a>
          </div>
          <div class="col-md-6 text-right">
            <span class="badge badge-danger">Stars: ${ele.stargazers_count}</span>
            <span class="badge badge-primary">Watchers: ${ele.watchers_count}</span>
            <span class="badge badge-success">Forks: ${ele.forks_count}</span>
          </div>
        </div>
      </div>
      `
      document.getElementById('repos').innerHTML = reposContainer
    });
  }

  clearProfile(user) {
      this.profile.innerHTML = '';
  }

  //show alert if user not found
  showAlert() {
    //clear repeating Alerts
    this.clearAlert();
    const container = document.querySelector('.searchContainer');
    const searchDiv = document.querySelector('.search');
    const alert = document.createElement('div');
    alert.className = 'alert alert-danger';
    alert.innerText = 'User Not Found';
    container.insertBefore(alert, searchDiv);
    //hide alert after 3sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000)
  }

// Clear Alert
clearAlert() {
  const currntAlert =  document.querySelector('.alert');
  if(currntAlert) {
    currntAlert.remove();
  }
}

}