const express = require('express');
const app = express();

let responseState = [];
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5OTAxNDc3LCJpYXQiOjE3MTk5MDExNzcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjY4MzA4MjdhLWE1NTItNDA2Yy05ODM5LWFkMjg5YzY3MTI0ZSIsInN1YiI6InBoYW5pbjI3OTg3QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IlNlc2hhZHJpIFJhbyBHdWRsYXZhbGxlcnUgRW5naW5lZXJpbmcgQ29sbGVnZSIsImNsaWVudElEIjoiNjgzMDgyN2EtYTU1Mi00MDZjLTk4MzktYWQyODljNjcxMjRlIiwiY2xpZW50U2VjcmV0IjoiTEtMekpVVm1iV2pEd0lQUyIsIm93bmVyTmFtZSI6Ik5BREVORExBIE5BR0EgVkVOS0FUQSBQSEFORUVORFJBIiwib3duZXJFbWFpbCI6InBoYW5pbjI3OTg3QGdtYWlsLmNvbSIsInJvbGxObyI6IjIxNDgxQTEyQTUifQ.mipSO2RDc4Z8-8h_B3jHqOtRDCXd1jXQGkH4GnG_Geo";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5OTAxNzQ2LCJpYXQiOjE3MTk5MDE0NDYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjY4MzA4MjdhLWE1NTItNDA2Yy05ODM5LWFkMjg5YzY3MTI0ZSIsInN1YiI6InBoYW5pbjI3OTg3QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IlNlc2hhZHJpIFJhbyBHdWRsYXZhbGxlcnUgRW5naW5lZXJpbmcgQ29sbGVnZSIsImNsaWVudElEIjoiNjgzMDgyN2EtYTU1Mi00MDZjLTk4MzktYWQyODljNjcxMjRlIiwiY2xpZW50U2VjcmV0IjoiTEtMekpVVm1iV2pEd0lQUyIsIm93bmVyTmFtZSI6Ik5BREVORExBIE5BR0EgVkVOS0FUQSBQSEFORUVORFJBIiwib3duZXJFbWFpbCI6InBoYW5pbjI3OTg3QGdtYWlsLmNvbSIsInJvbGxObyI6IjIxNDgxQTEyQTUifQ.8C3vfE26Y-VLBmIn0rUdmoJBJYEHsQMv6bM19aNfXJM"

app.get('/numbers/:numberId', async (req, res) => {
  const numberId = req.params.numberId;
  if (numberId === 'p') {
    const primeResponses = await fetch('http://20.244.56.144/test/primes', {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    });
    const result = await primeResponses.json();
    console.log(result);
    const responseObject = {};
    const generatedNumbers = result.numbers;
    responseObject.numbers = generatedNumbers;
    responseObject.windowPrevState = responseState;
    const currState = generatedNumbers.length <=10 ? generatedNumbers : generatedNumbers.slice(generatedNumbers.length - 10);
    responseObject.windowCurrState = currState;
    responseState = currState;
    const sum = currState.reduce((accumlator, current) => accumlator + current, 0);
    const avg = sum / currState.length;
    responseObject.avg = avg;
    return res.json(responseObject);
  } else if (numberId === 'f') {
    const primeResponses = await fetch('http://20.244.56.144/test/fibo', {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    });
    const result = await primeResponses.json();
    console.log(result);
    const responseObject = {};
    const generatedNumbers = result.numbers;
    responseObject.numbers = generatedNumbers;
    responseObject.windowPrevState = responseState;
    const currState = generatedNumbers.length <=10 ? generatedNumbers : generatedNumbers.slice(generatedNumbers.length - 10);
    responseObject.windowCurrState = currState;
    responseState = currState;
    const sum = currState.reduce((accumlator, current) => accumlator + current, 0);
    const avg = sum / currState.length;
    responseObject.avg = avg;
    return res.json(responseObject);

  }
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});