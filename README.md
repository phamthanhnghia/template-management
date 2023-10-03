1. SetUp Docker Enviroment Laravel
git clone https://github.com/Laradock/laradock.git environment-laradock
2. SetUp Laravel 10 
composer install
3. Add template, table
php artisan migrate
php artisan db:seed
4. Create API CURD User
5. Create tool table user

docker exec -it --user laradock environment-laradock-workspace-1 bash