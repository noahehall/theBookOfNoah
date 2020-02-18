
# links 
	- [reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy)

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
	- [jwt vs html5 whorage](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage)
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
	- request headers
		- contain metadata about the request
	- request body
		- contain the request data
	- JWT
		- json web tokens 
		- useful for api atuhentication and authorization 
		- encrypts payload as a base64(or other) kind of string which is set on responses and the browser attaches to future requests
			- more secure than cookies as cookies are plain text
		- usually contain 
			- scopes for authorization
			- user info for authentication
			- signature hash to verify the integrity of the token (you need the secret to decrypt it)


## session related headers
	- set-cookie (response)
		- set on the response, the browser returns this value with future requests

```js
	


```