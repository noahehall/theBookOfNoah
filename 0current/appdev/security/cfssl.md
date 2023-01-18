# Cloudflare CFSSL

- CFSSL and CA in generall
- open source toolkit for everything TLS/SSL
- used internally by cloudflare for budnling tls/ssl certificate chains, and internal certificate authority infrastructure
- used for all of their tls certificates

## links

- [cfssl github](https://github.com/cloudflare/cfssl)
- [intro blog post](https://blog.cloudflare.com/introducing-cfssl/)
- cfssl
  - [cmd docs: very good](https://github.com/cloudflare/cfssl/blob/master/doc/cmd/cfssl.txt)
  - [signing -profiles](https://github.com/cloudflare/cfssl/blob/master/doc/cmd/cfssl.txt#L72)
  - [mininmal profile configuration](https://github.com/cloudflare/cfssl/blob/master/doc/cmd/cfssl.txt#L179)
- general notes
  - [public key infrastructure (wikipedia)](https://en.wikipedia.org/wiki/Public_key_infrastructure)
  - [certificate signing request](https://www.ssl.com/faqs/what-is-a-csr/)
  - [certificate authority](https://www.ssl.com/faqs/what-is-a-certificate-authority/)
  - [public CA baseline requirements](https://cabforum.org/baseline-requirements-documents/)
  - [oracle docs for webserver 2.1](https://docs.oracle.com/cd/E19957-01/805-7698/ssl-config-chap-391/index.html)

## terms

- domain: second level: domain.x; and generally setup to point to an ip addr
- top level domain: first level: x.toplevel
- root domain: second + first: domain.y
- subdomain: third++ : www.x.y
  - in some contexts this is the hostname: hostname.x.y
  - e.g. on linux servers it will be yourName@hostname
- fully qualified domain name: FQDN: complete and unambiguous domain name that specifies an exact location for an object in a DNS hierarchy; generally its the domain + top level
- common name: the fully qualified domain name
- wildcard certs: groups multiple subdomains under a single cert, e.g. `*.domain.com`
- SAN Certificate: Subject Alternate Name; group multiple domains under a single cert, e.g. `boop.com` and `soup.com`
- entity: website, biz, person, machine, etc

## ramping up

### certificate signing request

- aka certificate signature request
- encoded text file: data related to the entity requesting a certificate from a certificate authority and signed with the entity's priv key
- distinguished names: DN: the signing request is bound to the names, from most specific to least specific (more names exist than the ones listed here)
  - CN: common name
  - EM: email address
  - OU: organization unit
  - O: organization
  - L: city/locality
  - ST: state/province
  - C: country
- pubkey (never share the privkey)

### digital certificate

- see one of the security docs in this dir for a deep dive
- contains the entity's public key and is signed by the issuing certificate authority so receivers of the certificate know with whom to verify the providers authenticity
- authentication
- encryption
- integrity

### end-entity certificate

- aka leaf certificate, subscriber certificate
- generally the the website, biz, or person
  - binds domain names to server names
  - binds comany names to locations
- certificate provided to a specific entity, signed by one/more intermediate certificates, itself signed by the trust anchor
- cannot issue certificates

### intermediate certificate

- provide a structure for conferring the validity of the trust anchor to additional intermediate and end-entity certificates in the chain
- there are different types, each with a specific purpose, e.g.
  - issuing ssl/tls
  - coding signing certificates
  - confer the root CA's trust to other organizations
- all intermediate certificates provide a buffer between end-entity certs and the root ca; protecting the priv root key from being compromised

### root CA: certificate authority

- aka trust anchor
- entity that validates the identities bound to cryptographic keys through the issuance of digital certificates
- signs and issues intermediate certificates
- all browsers/operating systems come with a default set of trusted root CAs
  - older browsers & things will have outdated CAs, or CAs with poor ssl versions

#### private CAs

- this is what you're trying to do with consul

### public CAs

- cant issue end-entity certificates directly; end-entity certs must come from intermediate certs

### chain of trust

- hierarchy of certificates used to verify the validity of a certificates issuer
  - will always contain 1 leaf, 1 root, and 1..X many intermediates
- lower trust certs are signed and issued by higher trust certs; and provide a link from the end-entity all the way up to the trust anchor
- trust anchor: the originating certificate authority; has the ability
- intermediate certificate: atleat one; serves as insulation between the CA and end-entity certificate
- end-entity certirficate: used to validate the identity of an entity
- chain of trust works by following the keys used to sign certificates, and there can be multiple chains of trust for the same keys.
  - i.e. your single leaf certificate, will be issued by a single ca
  - however that CA will be trusted by an arbitrary amount of intermediates

#### bundling

- leaf certs cant present their single cert, but must bundle the leaf and intermediates, so recipients can verify the providers claims with the CA
  - the leaf should point to the intermediates, and the intermediates should eventually point to the CA
  - you have to provide as many intermediates as it takes for the recipients to match against a CA they already trust
- FYI
  - Different browsers trust different root certificates.
  - Older systems might have old root stores.
  - Older systems don't support modern cryptography.

## flow

- generate pub key and privkey
- create a CSR and sign it with the privkey
- give the CSR & pubkey to the CA
- the CA validates the CSR, and returns a digitally signed server certificate and the CA's issuing privkey
- when a third party needs to verify the entity, they can:
  - confirm the certificate is valid: use the CA's pubkey to validate the certificate
  - confirm the entity is valid: does this entity have the right to provide this certificate signed by the CA and is their issuing privkey valid
  - integrity: has the certificate been altered

## cloudflare

- both a CLI and HTTP api server for signing, verifying and budnling TLS certs

### files & locations

```sh
# private keys
/etc/ssl/private/*.pem

# certificates
/etc/ssl/certs/*.pem


```

### cfssl

- cli: the entrypoint to cloudflare cfssl
- only uses a single single signing key, use `multirootca` if multiple signing keys are needed

```sh

# CFSSL ###################
############
# everythign can be specified via a json file
# cli flags override shiz in the json
############
# cmds TODO
# gencrl
# ocsprefresh
# serve
# ocspdump
# scan
# ocspserve
# info: Get info about a remote signer
# ocspsign
# print-defaults
# revoke

### certinfo: output certinfo about the given cert

### CSR examples

# minimum required
{
    "CN": "customer.com",
    "hosts": [
      "example.com",
      "www.example.com",
      "https://www.example.com",
      "jdoe@example.com",
      "127.0.0.1"
    ],
    "key": {
      "algo": "rsa",
      "size": 2048
    },
    "names": [
        {
          "C": "US",
          "L": "San Francisco",
          "O": "Customer",
          "OU": "Website",
          "ST": "California"
        }
    ]
}

### generate a privkey and certificate request
### cfssl root CAs: for creating & signing leaf certs
# self signed root CA and privkey
genkey -initca csr.json | cfssljson -bare ca


### generate a privkey and certificate
# remote-issued certificate and private key.
# has a remote CFSSL server sign and issue the certificate
gencert \
  -remote=remote_server \
  -hostname=comma,separated,hostnames \
  csr.json
# local-issued certificate and private key.
#
cfssl gencert \
  -ca ca.cert.pem \
  -ca-key ca.privkey.pem \
  -hostname=comma,separated,hostnames \
  csr.json

cfssl gencert -ca cert -ca-key key [-hostname=comma,separated,hostnames] csr.json


### sign a certificate
### requires the rootca cert and privkey

# via flags
sign \
  -ca ca.cert.pem \
  -ca-key ca.privkey.pem \
  -hostname x.com,y.com,z.com \
  ./xyz.com

# via csr
sign ..... -csr /path/to/csr.json


### build a certificate bundle
### @see https://github.com/cloudflare/cfssl#bundling
### used for the root and intermediate certificate pools
# syntax
cfssl bundle [-ca-bundle bundle] [-int-bundle bundle] \
             [-metadata metadata_file] [-flavor bundle_flavor] \
             -cert certificate_file [-key key_file]
# create a certificate bundle
bundle -cert mycert.crt


### start the api server
serve


### generate a self signed certificate
selfsign

```

### cfssljson

- cli: takes the json output from cfssl and multirootca and writes certificates, keys, CSRs and bundles to disk
- logic
  - if cert|certificate: basename.pem
  - if key|private_key: basename-key.pem
  - if csr|certificate_request: basename.csr
  - if bundle: basename-bundle.pem
  - if ocspResponse: basename-response.der

```sh
# -bare: the response from CFSSL isnt wrapped in the api repsonse
```

### multirootca

- certificate authority server that can use multiple signing keys

```sh


```

### mkbundle (cfssl-mkbundle)

- used to build the root and intermediate bundles used in verifying certificates. It can be installed with

### cfssl-bundle

### cfssl-certinfo

### cfssl-newkey

### cfssl-scan
