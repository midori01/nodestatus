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
docker pull midori01/nodestatus
docker compose up -d
```

# Remove
```bash
docker rm -f nodestatus
docker rmi $(docker images -q midori01/nodestatus)
rm -r ~/nodestatus
```
