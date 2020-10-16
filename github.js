class Github {
  constructor() {
    this.user_id = '7febe44e158cc5b3ff60';
    this.user_secret = '5bd1975dc403df996f68ff1133c552afd01702da';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  // get user data request
  async getUser(user) {
    const userProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.user_id}&client_secret=${this.user_secret}`);
    const userRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.user_id}&client_secret=${this.user_secret}`);

    const profile = await userProfile.json();
    const repos = await userRepos.json();


    return {
      profile : profile,
      repos: repos
    }
  }
}