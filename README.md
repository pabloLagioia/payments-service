# API for Payments

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