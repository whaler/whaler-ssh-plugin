# Whaler ssh plugin

This plugin add ability to use ssh in whaler containers.

> **NB!** `openssh-client` must be installed inside container.

## Install

```sh
$ whaler plugins:install https://github.com/whaler/whaler-ssh-plugin
```

## Configure

```sh
$ docker create -v /root/.ssh -v $SSH_AUTH_SOCK:/ssh-agent --name whaler_ssh busybox:latest /bin/true
$ whaler vars:set SSH_AUTH_SOCK /ssh-agent
```

## License

This software is under the MIT license. See the complete license in:

```
LICENSE
```
