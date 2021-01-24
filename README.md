# Example API for a Payments service using Clean Architecture
This was built using the express framework but it could be modified to use another library
as the api is not bound to express itself. You would just have to change the index where all
the routing gets set up.

You will notice the files within the api folder don't really have any logic other than error handling at 
an http level.
This is becuase the logic was written in the "use cases". This is a way of using https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html.
There might be certain differences but the main idea is expressed in this piece of software.

## Structure
- api: it has the interface (HTTP - REST) used to invoke the different use cases.
- dataSource: CRUD operations. You could exchange the one I implemented by any other, just keep the interface and you won't have to modify anything from the use cases.
- useCases: it has the application logic.
- helpers: is used with the express framework mainly to measure app performance, handle errors in express and bind routes.
- templates: I used this to add code faster. Take a look at the following item.

### Templates
The templates help develop new features (rest interfaces and use cases). It generates code that the developer
will then modify with the actual code that's going to test or performn the expected action. It includes
a logger by default.

## Commit a transaction
POST /v1/transaction

Headers
  - Content-Type: application/json

Status
  - 200: OK
  - 400: Something in the request is incorrect
  - 500: Something failed while trying to process your request

Request body:
{
  "accountId": string,
  "amount": number,
  "type": string "credit" or "debit"
}

## Get transaction by id
GET /v1/transaction/:transactionId

Headers
  - Content-Type: application/json

Status
  - 200: OK
  - 400: Something in the request is incorrect
  - 404: Transaction by given id not found
  - 500: Something failed while trying to process your request

Response body:
{
  "accountId": string,
  "amount": number,
  "type": string "credit" or "debit"
}

## Get list of all transactions
GET /v1/transaction/

Headers
  - Content-Type: application/json

Satuts
  - 200: OK
  - 400: Something in the request is incorrect
  - 500: Something failed while trying to process your request

Response body:
{
  transaction: [
    {
      "accountId": string,
      "amount": number,
      "type": string "credit" or "debit"
    },
    ...
  ]
}

## How to run
npm install
npm start

## How to try it using Postman
https://www.getpostman.com/collections/a8759481974b64e4773f