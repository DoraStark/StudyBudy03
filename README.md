StudyBuddy - Express application with Docker and NGINX

Testing in Incognito Mode
Please test in Incognito mode to see the HTTP to HTTPS redirect correctly, because Chrome blocks direct redirection for selfsigned keys.
Just open a incognito mode, go to http://localhost/hello, and check that it redirects you to https://localhost/hello.
This avoids problems with browser cache.

The project consists of 2 services:

Application service (Express/Node.js):
Handles backend routes and responses.
Available at port 3001 inside the container.

NGINX reverse proxy:
Serves static files (from '/public_html') at '/doc/'
Forwards other requests to the Express application.
Available externally on port 80.