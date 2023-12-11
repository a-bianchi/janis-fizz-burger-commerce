.PHONY: start

start: 
	@ docker-compose up -d
	@ echo "Is up and running!"

down: 
	@ docker compose down

deploy:
	@npm prune
	@npm run build
	@SLS_DEBUG=* sls deploy --verbose

deploy-local:
	@ sls offline start 2>&1

deploy-remove:
	@ serverless remove

