.PHONY: start

start: 
	@ docker-compose up -d
	@ echo "Is up and running!"

down: 
	@ docker compose down

stop-api:
	@ docker stop api

deploy:
	@ echo "Starting deployment for the development environment..."
	@ npx dotenv npm prune
	@ npx dotenv npm run build
	@ npx dotenv sls deploy --stage=develop --verbose
	@ echo "Deployment for the development environment completed successfully!"

deploy-local:
	@ echo "Starting local deployment..."
	@ npx dotenv sls offline start 2>&1
	@ echo "Local deployment finished!"

deploy-remove:
	@ echo "Starting service removal for the development environment..."
	@ npx dotenv sls remove --stage=develop
	@ echo "Service removal for the development environment completed!"

