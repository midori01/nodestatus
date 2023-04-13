# nodestatus

### Install

```bash
# Install Docker with docker-compose v2
curl -fsSL https://get.docker.com | bash -s docker
docker --version
mkdir -p ~/.docker/cli-plugins/
curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64 -o ~/.docker/cli-plugins/docker-compose
# For arm64
# curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-aarch64 -o ~/.docker/cli-plugins/docker-compose
chmod +x ~/.docker/cli-plugins/docker-compose

# Download docker-compose.yml
mkdir ~/nodestatus
cd ~/nodestatus
wget https://raw.githubusercontent.com/midori01/nodestatus/master/docker-compose.yml
vim docker-compose.yml
docker compose up -d

# How to Update
cd ~/nodestatus
docker compose down
docker pull midori01/nodestatus:latest
docker compose up -d
```
