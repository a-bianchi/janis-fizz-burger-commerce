<div id="top"></div>

[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/a-bianchi/fizz-burger-commerce">
    <img src="https://avatars3.githubusercontent.com/u/49998302?s=200&v=4" alt="Logo" width="120" height="100">
  </a>

<h3 align="center">Challenge</h3>

  <p align="center">
    REST API for product management, as part of the technical challenge for Fizzmod.
    <br />
    <a href="https://github.com/a-bianchi/blob/develop/fizz-burger-commerce/CHALLENGE_README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#deploy">Deploy</a></li>
    <li><a href="#test">Test</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]]()

This project is designed to create an API that enables comprehensive product management. It provides essential functionalities to efficiently retrieve, create, delete, and update product information.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Nest.js](https://docs.nestjs.com/)
* [Serverless](https://www.serverless.com/)
* [Mongodb](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Docker](https://www.docker.com/)
* [Jest](https://jestjs.io/)
* [Husky](https://www.npmjs.com/package/husky)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

The environment necessary to run the service locally is detailed below.

### Prerequisites

- Npm (>=9.0.0)
- Node (>=18.0.0)
- Docker (>=4.21.1)
- Docker-compose (>=2.0.0)
  
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/a-bianchi/fizz-burger-commerce/
   ```
   
3. Rename the .env.example file to .env.
   
4. To run the mongodb database and API service in the same container, use the following command:
   ```sh
   make start
   ```

5. Wait a few seconds for the containers to run.

6. Import the <a href="https://github.com/a-bianchi/fizz-burger-commerce/blob/develop/postman/Janis%20Challenge.postman_collection.json">postman collection</a> located in the "postman" folder to be able to test.

7. You can test if the service is running using the following command:
   ```sh
   curl -X 'GET' \
   'http://localhost:3000/ping' \
   -H 'accept: */*'
   ```
  
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

1. Stop the container running the service, named "api".

2. Initiate the local testing by starting the project from the terminal using the command:
```bash
# development
$ npm start:dev
```

3.  Modify the database connection for the service by adjusting the value of the environment variable named "MONGO_CONNECTION_URI" in the .env file. If left unchanged, it will connect to the container named "db_mongo".

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- DEPLOY -->
## Deploy

The deployment is configured in gitaction in the "develop" branch only, when you add a pull request to the branch the papilene will execute the serverless framework commands, making the deployment automatically in Aws.

### Local Deployment Testing

In order to deploy on Amazon, it is necessary to configure the keys and that these keys have the necessary permissions and roles to be able to deploy. Once the keys are configured in the local environment, the following commands can be executed:

Deployment on AWS
```bash
make deploy
```
This command deploys the application on AWS using the configured access keys.
Removing the Service on AWS

Removing the Service on AWS
```bash
make deploy-remove
```
This command removes the deployed service on AWS. Execute it with caution as it will delete the infrastructure deployed on AWS.
Local Test Deployment

Local Test Deployment
```bash
make deploy-local
```
This command allows deploying the application locally for testing purposes.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- TEST -->
## Test

```bash
# unit tests
$ npm run test

# test coverage
$ yarn run test:cov
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ENDPOINTS -->
## ENDPOINTS
Below are the available endpoints:

You can access the endpoints via:
- Localhost: `http://localhost:3000`
- Amazon Server: `https://hs035q76c3.execute-api.us-east-1.amazonaws.com/local/`


1. GetAllProducts
```bash
curl -X 'GET' \
'http://localhost:3000/v1/products?priceFrom=6&priceTo=12&isPromotion=0&type=burger&orderBy=price&orderDirection=desc&name=burger' \
-H 'accept: */*'
```
Optional parameters: name, priceFrom, priceTo, isPromotion, type, orderBy, and orderDirection.

2. GetOneProduct
```bash
curl -X 'GET' \
'http://localhost:3000/v1/products/${productId}' \
-H 'accept: */*'
```
3. DeleteProduct
```bash
curl -X 'DELETE' \
'http://localhost:3000/v1/products/${productId}' \
-H 'accept: */*'
```
4. CreateProduct
```bash
curl -X POST \
http://localhost:3000/v1/products \
-H 'Content-Type: application/json' \
-H 'accept: */*' \
-d '{
"name": "Pepsi 2",
"type": "drinks",
"price": 6,
"image": "https://example.com/burger.jpg",
"isPromotion": true,
"discount": 2.5,
"ingredients": ["sugar"],
"status": "active"
}'
```
5. PutProduct
```bash
curl -X PUT \
http://localhost:3000/v1/products \
-H 'Content-Type: application/json' \
-H 'accept: */*' \
-d '{
"name": "Pepsi 2",
"type": "drinks",
"price": 6,
"image": "https://example.com/burger.jpg",
"isPromotion": true,
"discount": 2.5,
"ingredients": ["sugar"],
"status": "active"
}'
```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Alejo Bianchi - alejobianchi@gmail.com

Project Link: [https://github.com/a-bianchi/fizz-burger-commerce](https://github.com/a-bianchi/fizz-burger-commerce)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/alejobianchi
[product-screenshot]: images/infra.png

