docker-compose down
docker-compose up -d
sleep 1
curl -X PUT http://admin:password@127.0.0.1:5984/list
curl -X GET http://admin:password@127.0.0.1:5984/_all_dbs