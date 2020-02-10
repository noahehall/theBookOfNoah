
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