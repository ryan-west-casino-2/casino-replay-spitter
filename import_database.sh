#!/bin/bash

#docker exec -t bowie-container-pgsql psql -c 'CREATE DATABASE import_db' -U default
#docker exec -t bowie-container-pgsql pg_dumpall -c -U default > dump_$(date +%Y-%m-%d_%H_%M_%S).sql
#cat dump.sql | docker exec -i bowie-container-pgsql_imported psql -U default -d default

docker exec -i bowie-container-pgsql-imported  psql -d default -U default < dump.sql
docker exec -i bowie-container-pgsql-imported  psql -c "ALTER USER postgres WITH ENCRYPTED PASSWORD 'postgres';" -U postgres
echo "Done"