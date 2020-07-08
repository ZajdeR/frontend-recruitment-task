# Frontend developer recruitment task 
## How to start a project
To start run: 

`docker-compose up -d`

Go to [http://localhost:3000](http://localhost:3000)

Then you can call all the backend methods from localhost: 

For example: 
http://localhost:3000/internal/courier-u/initialize

To stop run: 
`docker-compose stop`

## To do
### 1. Address zip code field
Create a first form which emulates behaviour shown below: 
![form](/imgs/form.gif)

To fetch countries & validation rules use this method :
http://localhost:3000/internal/courier-u/initialize
(Fields:  `countries` and `zipValidationRules`)

### 2. Operators list 

Create a second form with operators list:
![form](/imgs/operators.png)

To fetch operators
http://localhost:3000/internal/courier-u/operators?receiverCountry=PL&senderCountry=PL&weight=1&sizeL=10&sizeD=10&sizeW=10

To fetch prices you should make a separate queries 
http://localhost:3000/internal/courier-u/prices/operators?operatorId=1&receiverCountry=PL&senderCountry=PL&weight=2&sizeL=2&sizeD=3&sizeW=4&receiverZip=51-180&packageType=1

Where `operatorId` is id of operator taken from previous step. 

### 3. Login form 

Create a simple sign in/sign up modal.  You can [find a layout here](https://github.com/jtkprojektpl/frontend-recruitment-task/blob/master/imgs/logowanie.psd).

![modal](/imgs/modal.png)
This form shouldn’t fire any requests, just a markup. 

## Checklist
- Country input should support autocomplete 
- Validation for zip codes for each country is required
- Operators items should be sortable by name / price / expected delivery time on the client side

## Requirements
* SPA should contain minified js/css bundle and can easily be included in any html page
* All requests should be as transparent as possible for users, loaders shouldn’t be irritating
* Webpack
* JS linter

## Extra points for: 
* i18n
* unit tests

## Submitting
The result is accepted as a *pull request in the fork* of this repository.

*Good luck! If you have any questions feel free to ping us!*
