# bookmark
    - https://devopsspiral.com/articles/containers/modernize-image-builds/
    - https://george.macro.re/posts/getting-started-with-buildkit/
    - https://blog.alexellis.io/building-containers-without-docker/
    - https://dev.to/thakkaryash94/how-many-ways-to-build-a-container-image-4g3p
    -


# TODO
    - https://static.sched.com/hosted_files/kccnceu19/12/Building%20images%20%20efficiently%20and%20securely%20on%20Kubernetes%20with%20BuildKit.pdf


- [helm upgrade failed](https://medium.com/nerd-for-tech/kubernetes-helm-error-upgrade-failed-another-operation-install-upgrade-rollback-is-in-progress-52ea2c6fcda9)
- [check this](https://github.com/moby/buildkit/tree/master/examples/kubernetes)

[enable mkcert](https://github.com/FiloSottile/mkcert#installation)

[get a prebuilt binary for mkcert](https://github.com/FiloSottile/mkcert/releases)

# quickies

```sh
# change k8s version to match whatever env
kbenv install 1.17.14
kbenv use 1.17.14


```
# MKCERT
    [chck this](https://devopsspiral.com/articles/containers/modernize-image-builds/)


    tool for making locally-trusted dev certs

    `mkcert -install`
        create and install a new local CA


    env vars
        TRUST_STORES=thisone,thatone,etc
            install local root CA into a subset of trust stores
            [check this](https://github.com/FiloSottile/mkcert#supported-root-stores)

        CAROOT=/path/for/ca/files
            enables you to manage sepearte CAs
            by installing to different folders



    examples
            `mkcert -key-file key.pem -cert-file cert.pem example.com *.example.com`

            generate an S/MIME cert for an email
                `mkcert filippo@example.com`

            use cert with nodejs
                `export NODE_EXTRA_CA_CERTS="$(mkcert -CAROOT)/rootCA.pem"`
