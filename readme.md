# Installation
## Clone repository
```sh
git clone git@github.com:lhorente/football-manager.git football-manager
```
## Run Composer Update to download dependecies
```sh
composer update
```
## Allow write permission on cache folders
```sh
chmod 775 -R bootstrap/cache
chmod 775 -R storage
```
## Copy .env.example to .env and configure it
```sh
cp .env.example .env
```
Fill the following fields: APP_URL, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD, SMTP_HOST, SMTP_PORT, SMTP_secure, SMTP_USER, SMTP_PASS
## Create database using database file
```sql
create database football_manager;
import fmanager.sql
```
## Configure cronjob to send XML reports
```sql
*/1 * * * * /usr/bin/php /path-to-your-installation/artisan mail:xmlRequests
```

# API
You can manage clubs and player by API. Documentation: https://lhorente.com.br/labs/fmanager/apidoc