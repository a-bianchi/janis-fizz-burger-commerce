.PHONY: start

start: 
	@ docker-compose up -d
	@ echo "Is up and running!"

down: 
	@ docker compose down

up: 
	@ docker compose up -d

