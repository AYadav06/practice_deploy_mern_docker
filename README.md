### Deploying a nodejs + prisma  backend in VM using docker and CD pipeline (github actions)
  ## steps:
- create a cd.yml file in .github/workflows 
- write cd.yml
- add environment variable like docker usename and dockerub access token in github secrets 
- create a VM
- add host ,usename and private key in the github secrets to ssh in vm and clone the project 
- Write the docker file 
- pass database url in docker build images as prisma 7 require the db url in generating client
- test,build and run image locally 
- RUN : 
         `
          docker build --build-arg DATABASE_URL="postgres://postgres:mypassword@localhost:5432/mydb" -t image_tag -e .             `
- RUN :
        ` docker run -p PORT:PORT -e DATABASE_URL="postgres://postgres:mypassword@localhost:5432/mydb image_name `
- Now add the githubaction to deploy to a vm using appleboy githubactions 
- In vm , manually install the docker
- Manually pull the image from docker hub and run the image  