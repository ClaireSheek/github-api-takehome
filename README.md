PaceIt Frontend home assignment

# Task

Create a react frontend for Github API

# Estimation

Effort estimation is 2 engineer hours

# Task description

Build a simple client for viewing user GitHub repository readme

1. Left side: Sidebar
   1.1 List of user public repositories.
   1.2 Github username should be taken from URL string, example:
   http://localhost:3000/github/dpaluy
   1.3 First 30 repositories should be fetched on the initial render.
   1.4 Results per page: 30 repositories
   1.5 Pagination: when the user scrolled to the bottom of the sidebar next page should be
   fetched and concatenated to the existing list
2. Right side: Main window
   2.1 When a user clicks on a repo name from the sidebar, README.md should be rendered
   in the Main window
3. Application should handle GitHub username change in the URL string
   Notes

- Tech stack: React and/or any other library you find helpful for this task
- You can use any bootstrapping boilerplate you want
- Fetch public repositories only
- Support Desktop version only, latest Chrome.
- Bare minimum of CSS, use default browser's styling for all elements
- Render README.md in any format: plain text/HTML/markdown
- Don't handle exceptions like not existing GitHub user or a missing readme
- Please submit a Github repository with your code
