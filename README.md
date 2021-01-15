# Whaler ssh plugin

This plugin add ability to use ssh in whaler containers.

> **NB!** `openssh-client` must be installed inside container.

## Install

```sh
whaler plugins:install whaler-ssh-plugin
```

## Configure

```sh
whaler vars:set SSH_AUTH_SOCK /.ssh/agent

# Start `ssh-agent` and add your SSH private key
docker run -d --restart always --env SSH_ADD=/id_rsa --name ssh-agent cravler/ssh-agent
docker cp $HOME/.ssh/id_rsa ssh-agent:/id_rsa
docker restart ssh-agent

# Or bind your local `ssh-agent` socket. NB! do not work, if SSH_AUTH_SOCK changes
docker create -v $SSH_AUTH_SOCK:/.ssh/agent --name ssh-agent cravler/ssh-agent /bin/true
```

## License

This software is under the MIT license. See the complete license in:

```
LICENSE
```
