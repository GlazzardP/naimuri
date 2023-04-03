Installation Instructions

1. npm i
2. npm start
3. npm run build and npm test are available if required, however, there are no tests written

Implementation Thoughts

I was quite happy with Octokit which I had never used before. Initially struggling to get more than repo back at a time. Once I got this working, I tried for a while to use parameters inside the Octokit method. Reading the docs, it doesn't look like they are build in. This is something I would like to read more on if I had more time.

Once I was getting a consistent response back, I decided to use useState instead of setting up Redux. This was purely a time based decision and would want to use Redux/Context etc if more time/building out the project.

With regards to testing, I would like to add tests, primarily to check the filtering is working and that the page 'fails gracefully' if anthing goes wrong i.e. Loader on the page if not repos found.

I was initially going to use an .env for the personal access token but thought including the .env inside repo didn't make sense. I would use an .env file in normal circumstances.

For the ReadMe, I was returning a successful response earlier so I'm slightly frustrated this is now not working. The idea was to call the readme within a RepoCard, the readme would then be displayed in a modal. Currently commented out as I ran out of time.
