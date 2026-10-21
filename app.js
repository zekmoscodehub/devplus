// Replace this with your GitHub username for the recruiter shortcut button
const MY_GITHUB_USERNAME = "zekmoscodehub"; 

const searchBtn = document.getElementById('search-btn');
const recruiterBtn = document.getElementById('recruiter-btn');
const usernameInput = document.getElementById('username-input');
const loadingSkeleton = document.getElementById('loading-skeleton');
const profileResult = document.getElementById('profile-result');

// Trigger search on click
searchBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (username) fetchGitHubProfile(username);
});

// Trigger Recruiter Mode shortcut
recruiterBtn.addEventListener('click', () => {
  usernameInput.value = MY_GITHUB_USERNAME;
  fetchGitHubProfile(MY_GITHUB_USERNAME);
});

// Fetch function using modern async/await
async function fetchGitHubProfile(username) {
  // Show skeleton loader, hide previous results
  loadingSkeleton.classList.remove('d-none');
  profileResult.classList.add('d-none');

  try {
    const response = await fetch(`https://github.com{username}`);
    
    if (!response.ok) {
      throw new Error('User not found');
    }

    const data = await response.json();
    displayProfile(data);
  } catch (error) {
    profileResult.innerHTML = `<div class="text-danger text-center w-100">⚠️ ${error.message}. Please check the spelling and try again.</div>`;
    profileResult.classList.remove('d-none');
  } finally {
    // Turn off loading animation
    loadingSkeleton.classList.add('d-none');
  }
}

// Inject the gathered metrics straight into your page layout
function displayProfile(user) {
  profileResult.innerHTML = `
    <img src="${user.avatar_url}" alt="${user.name}" class="rounded-circle border border-secondary" style="width: 100px; height: 100px;">
    <div class="w-100">
      <div class="d-flex justify-content-between align-items-start flex-wrap">
        <div>
          <h2 class="h4 fw-bold text-white mb-0">${user.name || user.login}</h2>
          <p class="text-secondary mb-2">@${user.login}</p>
        </div>
        <a href="${user.html_url}" target="_blank" class="btn btn-sm btn-outline-primary">Open Original GitHub</a>
      </div>
      <p class="text-light my-2">${user.bio || "This developer hasn't written a bio yet."}</p>
      
      <!-- Metrics Grid -->
      <div class="row g-2 mt-3">
        <div class="col-4 text-center p-2 bg-dark rounded border border-secondary-subtle">
          <small class="text-secondary d-block">Public Repos</small>
          <strong class="text-white fs-5">${user.public_repos}</strong>
        </div>
        <div class="col-4 text-center p-2 bg-dark rounded border border-secondary-subtle">
          <small class="text-secondary d-block">Followers</small>
          <strong class="text-white fs-5">${user.followers}</strong>
        </div>
        <div class="col-4 text-center p-2 bg-dark rounded border border-secondary-subtle">
          <small class="text-secondary d-block">Following</small>
          <strong class="text-white fs-5">${user.following}</strong>
        </div>
      </div>

      <!-- Skill Tag Example -->
      <div class="mt-3">
        <span class="tag">Active Developer</span>
        ${user.hireable ? '<span class="tag" style="color: #238636; border-color: rgba(35,134,54,0.3)">Available for Hire</span>' : ''}
      </div>
    </div>
  `;
  
  // Make the new template visible with a smooth display state transition
  profileResult.classList.remove('d-none');
}
