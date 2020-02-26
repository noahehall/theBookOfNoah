
# links 
	- [reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy)
	- [fuck nginx, use haproxy](https://www.haproxy.com/blog/using-haproxy-as-an-api-gateway-part-1/)

# TODO 
	- cross site scripting 
		- inject javascript to run on your page
	- cross site request forgery 
		- a page forces one of its visitors to unknownling take action on a different website that they are currently authenticated with
		- when you visit badsite.com it will load an img/javascript and post to yourbank.com and attempt to hijack your session and modify your account 


# best practices (almost)
	- dont trust anything in web storage because its open to js running in the browser
	- always use the 'httpOnly' cookie flag to disallow js running in the browser from accessing it
	- always use https 
	- always use the 'secure' cookie flag to guarantee cookies are only sent via https
	- plain-text cookies vs JWT
		- JWT
			- anything of importances/PID
			- dont require backend storage (but try to keep your payloads small)
			- easier to share in microservices
		- plain-text cookies
			- anything not important/PID
			- dont need to be decrypted, so faster if thats your juice
			- require backend storage (and dont use inmemory in prod)
			- can share session info via global session store but simpler with jwt

# security

## SSL/TLS
	- [certs for localhost](https://letsencrypt.org/docs/certificates-for-localhost/)
	- [another fucking ca cert tut, the others are fkd](https://blog.atulr.com/localhost-https/)
		- use this one, fuck the others
		- TODO, copy steps to this file
	- [OpenSSL Cert Authority on ubuntu](https://networklessons.com/uncategorized/openssl-certification-authority-ca-ubuntu-server)
	- [import ca files in browsers n things](https://thomas-leister.de/en/how-to-import-ca-root-certificate/)
	- [use the fucking authorities tab, damn alot oftime wasted on this one](https://superuser.com/questions/1213287/private-key-is-missing-or-invalid-when-importing-a-certificate-in-google-chrom/1276793)



```js
	// quick n dirty
	// generate self-signed cert 
	openssl req -x509 -out localhost.crt -keyout localhost.key \
	  -newkey rsa:2048 -nodes -sha256 \
	  -subj '/CN=localhost' -extensions EXT -config <( \
	   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")

	// a bit longer but better
	// create Cert Authority and self sign certs
	// https://networklessons.com/uncategorized/openssl-certification-authority-ca-ubuntu-server
i
```

# sessions 
	- [sessions in nodejs](https://stormpath.com/blog/everything-you-ever-wanted-to-know-about-node-dot-js-sessions)
	
	- [server auth basics](https://medium.com/@evangow/server-authentication-basics-express-sessions-passport-and-curl-359b7456003d)
	- [managing sessions in express](https://dzone.com/articles/securing-nodejs-managing-sessions-in-expressjs)
	- [typical http session](https://developer.mozilla.org/en-US/docs/Web/HTTP/Session)
	- [ibm session best practices, fuck java tho](https://www.ibm.com/support/knowledgecenter/en/SS7K4U_8.5.5/com.ibm.websphere.zseries.doc/ae/cprs_best_practice.html)


## terminology
	- session
		- state for http requests, permitting you to distinguish the sender of an http requests across http requests via headers set in responses which the browser attaches to future requests
	- cookies 
		- storage for data inside a browser
		- the browser attaches the cookies associated with a domain on each request ot that domain
		- can only be sent to the domain which set the cookie
	- request headers
		- contain metadata about the request
	- request body
		- contain the request data
	



## session related headers
	- set-cookie (response)
		- set on the response, the browser returns this value with future requests

```js
	

i
```


# jwt - json web tokens
	- [jwt spec](https://tools.ietf.org/html/rfc7519)
	- [practical (oh really?) jwt guide](https://medium.com/swlh/a-practical-guide-for-jwt-authentication-using-nodejs-and-express-d48369e7e6d4)
	- [jwt vs html5 whorage](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage)
	- [jwt and oauth](https://nordicapis.com/why-cant-i-just-send-jwts-without-oauth/)

## terminology 
	- json web tokens 
		- use cases
			- safe way to represent a set of information between two parties 
			- useful for api atuhentication and authorization 
		- architecture 
			- jwt structure
				- a '.' delimited string containing 3 parts
				- head
					- a Base64Url encoded stringified js object
					- alg - algorithm used to sign the token
						- simmetrical algorithm: 
							- uses a string as the secret to sign and verify the token 
						- asymmetrical 
							- uses a private key to sign the token and a public key to verify the token
					- typ - type of token
				- body 
					- base64Url encoded stringified js object
					- pmay contain oauth specific members: iss, sub, auad, exp, iat, jti, etc
				- signature
					- used to verify if the token is valid/authentic
					- consists of the body+head encrypted using any hash algorithm, e.g. sha256
			- security logic 
				- the server creates a hash string of a the jwt head and body using a secret key. this hash string is the signature 
				- on subsequent requests  from the client, the server of the jwt uses the signature to verify the head and body has not been tampered with 
			- server-client data flow 
				- a client sends PID to the server
				- server creates a jwt token based on the PID and sends it the client
				- the client send stores the jwt
					- local storage- token will be valid until it expires
					- sessoin storage - token will be valid until browser tab is closed/token expires
				- on subsequent requests to the server, the client sends the jwt token in the authorization header as `Bearer ${token}`
				- the server extracts the token from the authorization header, decrypts it using the private key, and validates the PID has not been tamperd with



			- more secure than cookies as cookies are plain text
		- usually contain the following 'claims'
			- scopes for authorization
			- user info for authentication
				- thus you dont need to store anything on your backend as you can just encode it in the jwt
			- signature hash to verify the integrity of the token (you need the secret to decrypt it)

```js
	// convert a jwt part to base64Url
	// 
	const toBase64Url = obj => Buffer.from(
		JSON.stringify({
			"alg": "HS256",
			"typ": "JWT"
		})).toString('base64')
			.replace(/=/g, "")                               
			.replace(/\+/g, "-")                               
			.replace(/\//g, "_")

	const jwtHead = {
		alg: 'HS256',
		typ: 'JWT'
	};

	const jwtBody = {
		// oath specific
		aud: '',
		exp: (Date.now() / 1000) + 60 * 5, // expiration time in seconds since epoc, e.g. 5 minutes from now
		iat: Date.now(), // creation timestamp
		iss: '',
		jti: '',
		sub: '',
	};

	const jwtSignature = someEncryptionMethod(toBase64Url(jwtHead) + '.' + toBase64Url(jwtBody))
i
```