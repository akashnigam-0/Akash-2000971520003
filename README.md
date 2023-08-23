# Akash-2000971520003
Akash Nigam (CSE-AI)
2000971520003

Question:-
Develop Number Management HTTP Microservice

Develop a HTTP microservice called number-management-service that exposes a GET REST API "/numbers". This API receives a list of URLS through query parameters. This query param is called "url". It can appear more than once, for example:

http://localhost:8008/numbers?url=http://20.244.56.144/numbers/primes&url=http://abc.com/fibo

In the above example, your server is running at port 8008. When API /numbers is called, your service shall retrieve each of these URLS if they turn out to be syntactically valid URLS. Each URL will return a JSON data structure that looks like this:
{
"numbers": [ 1, 2, 3, 5, 8, 13 ]
}
Acceptance Criteria

Collect response from each valid URLS and display them in the ascending order with each integer appearing only once

Your service must return the response as quickly as possible (never later than 500 milliseconds)

If a remote URL takes too long to respond, it must be ignored. The timeout must be respected regardless of the size of the data.

Your server should accept all valid URLS, not just the URLS provided by us.

You should not implement any API for getting odd, even, etc. numbers

Return response to the caller like
{
"numbers": [merged unique integers]
}
Test Server APIs

For your convenience, we are giving you a test server which exposes APIs like

http://20.244.56.144/numbers/primes

http://20.244.56.144/numbers/fibo

http://20.244.56.144/numbers/odd

http://20.244.56.144/numbers/rand

Test Case

http://localhost:port/numbers?url=http://20.244.56.144/numbers/primes&url=http://20.244.56.144/numbers/fibo& url=http://20.244.56.144/numbers/odd

Expected Output
{
"numbers": [ 1, 2, 3, 5, 7, 8, 9, 11, 13, 15, 17, 19, 21, 23 ]
}


Steps to do that:-
1:- npm init -y
2:- npm install express axios
3:- run app.js
4:- run node.js on terminal
5:- http://localhost:8008/numbers?url=http://20.244.56.144/numbers/primes&url=http://20.244.56.144/numbers/fibo&url=http://20.244.56.144/numbers/odd
run above link on browser to get output.
