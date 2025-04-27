StudyBuddy - Express application with Docker and NGINX

The project consists of 2 services:

Application service (Express/Node.js):
Handles backend routes and responses.
Available at port 3001 inside the container.

NGINX reverse proxy:
Serves static files (from '/public_html') at '/doc/'
Forwards other requests to the Express application.
Available externally on port 80.