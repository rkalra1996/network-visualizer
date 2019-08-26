# Network-Visualizer

Network Visulizer is a tool which allows users to manage the graph database (neo4j) from a GUI. It has the capability to visualize the database and make changes to it without interacting with the database directly thus, removing the hassle to manage database using complex queries and much more. This repository is the client side of Network-Visualizer.

This is the client side of network visualizer for neo4J.
View the live version of the application here : 
* http://13.234.2.81:3050/


# Technology Stack used

* Angular 6/7 for UI
* NodeJS for Backend Development with Express for APIs
* Neo4j as the core Database

# Installation

1. Clone the repository and checkout to development-client-V2 branch
2. Make sure you have neo4J installed or data hosted on sandbox and it should be running
3. Go to root of the project and type 'npm install'
4. Open databse_config/config.json and update user credentials if needed (if no password is needed leave the password blank)
5. type 'node server.js' in the root of the project.

## For Developer build (continued from above)

1. Go to client/ and type npm install to install packages
2. Once done, type 'ng serve' and wait for the build
3. Your app will be active on port 4200

## For Production build (continued from above)

1. Since the server is up, just go to your browser and hit localhost:3050

# Installation and Setup of Neo4j Database

1. Download the Neo4j Database Server (version -> Neo4j Community Edition 3.3.9) from the link below: 
* https://neo4j.com/download-center/#community
2. Unzip or Untar the folder.
3. Download the data of the Neo4j from the link below :
* https://drive.google.com/file/d/1VXKeDb5lpH5-x1tIcLWHbnkfdn3KucO0/view?usp=sharing
4. Unzip the folder and paste it in location "neo4j-community-3.3.9/data/databases".
5. Now open a terminal in the folder "neo4j-community-3.3.9" and run "./bin/neo4j start" (with prefix "sudo" for Linux users) to run the neo4j server.
6. Open the Neo4j server in the browser at "http://localhost:7474".

# Want to Contribute ?

[ **Please Note** ] Contribution to the project without the consent of the repository owner is strictly probihited. Developers and contributors are welcome to start discussions on the issues reported on github / report new issues / suggest new features or changes to existing one but sending direct PRs without informing the owner will result in direct ban from using the repository or its codebase.

If you want to contribute, feel free to ping the project owners / maintainers or reach out the contributors to get yourself started.
