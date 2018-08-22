# Whaler ssh plugin

This plugin add ability to use ssh in whaler containers.

> **NB!** `openssh-client` must be installed inside container.

## Install

```sh
$ whaler plugins:install https://github.com/whaler/whaler-ssh-plugin
```

## Configure

```sh
$ whaler vars:set SSH_AUTH_SOCK /.ssh/agent

# Bind your local `ssh-agent` socket
$ docker create -v $SSH_AUTH_SOCK:/.ssh/agent --name ssh-agent cravler/ssh-agent /bin/true

# Or start `ssh-agent`
$ docker run -d --name ssh-agent cravler/ssh-agent
# And add your SSH private key to the `ssh-agent`
$ docker run -it --rm --volumes-from ssh-agent -v $HOME:$HOME cravler/ssh-agent ssh-add $HOME/.ssh/id_rsa
```

## License

This software is under the MIT license. See the complete license in:

```
LICENSE
```
