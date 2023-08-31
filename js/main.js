$(document).ready(function(){
  $('#searchUser').on('keyup', function(e){
    let username = e.target.value;

    $.ajax({
        url:'https://api.github.com/users/'+username,
        data:{
          client_id:'3fcbd95b6586cf52ca7d',
          client_secret:'4233ea0f74bd354eaee33897c740808ad70073d6'
        }
    }).done(function(user){
      $('#profile').html(`
        <div class="card border-primary mb-3" style="max-width: 100rem;">
          <div class="card-header"><h3>${user.name}</h3></div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3">
                <img class="img-thumbnail avatar" src="${user.avatar_url}">
                <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
              </div>
              <div class="col-md-9">
                <span class="badge bg-dark">Public Repos: ${user.public_repos}</span>
                <span class="badge bg-primary">Public Gists: ${user.public_gists}</span>
                <span class="badge bg-success">Followers: ${user.followers}</span>
                <span class="badge bg-info">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website/blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h3 class="page-header">Latest Repos</h3>
        <div id="repos"></div>
        <div class="card mt-3">
            <div class="card-header">
                <h4>Contribution Chart</h4>
            </div>
            <div class="card-body">
                <img id="ghchart" src="https://ghchart.rshah.org/${user.login}" alt="${user.name}'s Github chart" />
            </div>
        </div>

      `);



      $.ajax({
        url:'https://api.github.com/users/'+username+'/repos',
        data:{
          client_id:'3fcbd95b6586cf52ca7d',
          client_secret:'4233ea0f74bd354eaee33897c740808ad70073d6',
          sort: 'created: asc',
          per_page: 5
        }
      }).done(function(repos){
        $.each(repos, function(index, repo){
          $('#repos').append(`
            <div class="card">
              <div class="row">
                <div class="col-md-7">
                  <strong class="repo-name">${repo.name}</strong>
                </div>
                <div class="col-md-3">
                  <span class="badge bg-dark">Forks: ${repo.forks_count}</span>
                  <span class="badge bg-primary">Watchers: ${repo.watchers_count}</span>
                  <span class="badge bg-success">Stars: ${repo.stargazers_count}</span>
                </div>
                <div class="col-md-2">
                  <a href="${repo.html_url}" target="_blank" class="btn btn-light">Repo Page</a>
                </div>
              </div>
            </div>
          `);
        });
      });
      
    });
  });
});
