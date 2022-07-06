class Github{
    constructor(){
        this.client_id = 'a202d6a974b09086ddaa';
        this.client_secret = 'e85964d66f4ce146b4f7f525e2375c777be8827a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}