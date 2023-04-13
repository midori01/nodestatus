# nodestatus

# Install

```bash
mkdir ~/nodestatus
cd ~/nodestatus
wget https://raw.githubusercontent.com/midori01/nodestatus/master/docker-compose.yml
docker compose up -d
```

# Update
```bash
cd ~/nodestatus
docker compose down
docker pull midori01/nodestatus:latest
docker compose up -d
```
