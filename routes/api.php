<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/**
 * @api {get} customers/requestCustomerAccessToken Return Customer Access Token
 * @apiName requestCustomerAccessToken
 * @apiGroup customers
 *
 * @apiHeader {String} Authorization OAuth Authorization String, using sha256 encrypt passing your client_id, client_secret and nonce. 
 * @apiHeaderExample {String} Generation Authorization (PHP): 
								$customer_key = "key123";
								$customer_secret = "secret123";
								$nonce = time();
								$signature = hash_hmac('sha256', $customer_key.$nonce, $customer_secret);
								$oauth_string = 'oauth_consumer_key="'.$customer_key.'", oauth_signature_method="HMAC-SHA1", oauth_signature="'.$signature.'", oauth_timestamp="'.$nonce.'", oauth_nonce="'.$nonce.'", oauth_version="1.0"';
 * @apiHeaderExample {String} Authorization-Example:
								OAuth oauth_consumer_key="key123", oauth_signature_method="HMAC-SHA1", oauth_signature="cdaa668d0c95a686ebd96ba9d4b84ca52c7372ad4e398c687f5e443b051ddc65", oauth_timestamp="1557052957", oauth_nonce="1557052957", oauth_version="1.0"
 *
 * @apiSuccessExample {json} Success-Respose: 
								{"id": 2,"customer_access_token": "16f72f3faa21a22372c8cd3776547c52","customer_access_token_expire_at": 1557096379}
 */
Route::get('customers/requestCustomerAccessToken', 'Api\CustomersController@requestCustomerAccessToken');

/********************
 Clubs API
********************/
/**
 * @api {get} clubs Return All CLubs
 * @apiName listClubs
 * @apiGroup clubs
 *
 * @apiHeader {String} Customer-Access-Token The Customer-Access-Token returned by API requestCustomerAccessToken

 *
 * @apiSuccessExample {json} Success-Respose: 
								{ "status": true, "message": "", "response": [ { "id": 1, "name": "Barcelona", "founded": "2019-05-02", "short_name": "FCB", "ground": "Coup Nu", "created_at": null, "updated_at": null, "deleted_at": null }, { "id": 5, "name": "Real Madrid Club de Fútbol", "founded": "1902-03-06", "short_name": "RMA", "ground": "Santiago Bernabéu", "created_at": "2019-05-04 10:36:05", "updated_at": "2019-05-04 10:36:05", "deleted_at": null }, { "id": 6, "name": "Associazione Calcio Milan", "founded": "1899-12-13", "short_name": "ACM", "ground": "San Siro", "created_at": "2019-05-04 10:36:46", "updated_at": "2019-05-04 10:36:46", "deleted_at": null }, { "id": 7, "name": "Fußball-Club Bayern München e. V.", "founded": "1900-02-27", "short_name": "BMH", "ground": "Allianz Arena", "created_at": "2019-05-04 10:39:06", "updated_at": "2019-05-04 10:39:06", "deleted_at": null }, { "id": 8, "name": "Liverpool Football Club", "founded": "1892-06-03", "short_name": "LFC", "ground": "Anfield", "created_at": "2019-05-04 10:39:52", "updated_at": "2019-05-04 10:39:52", "deleted_at": null } ] }  
*/
Route::middleware('customer')->get('/clubs', 'Api\ClubsController@index'); // List all clubs
/**
 * @api {get} clubs/:id Return one club by ID.
 * @apiName getClub
 * @apiGroup clubs
 *
 * @apiHeader {String} Customer-Access-Token The Customer-Access-Token returned by API requestCustomerAccessToken
 * @apiParam {Number} id Club unique ID.

 *
 * @apiSuccessExample {json} Success-Respose: 
								{ "status": true, "message": "", "response": { "id": 1, "name": "Barcelona", "founded": "2019-05-02", "short_name": "FCB", "ground": "Coup Nu", "created_at": null, "updated_at": null, "deleted_at": null }
*/
Route::middleware('customer')->get('/clubs/{id}', 'Api\ClubsController@get')->name('clubsGet'); // Return one club by ID
/**
 * @api {post} clubs Create a club
 * @apiName createClub
 * @apiGroup clubs
 *
 * @apiHeader {String} Customer-Access-Token The Customer-Access-Token returned by API requestCustomerAccessToken
 * @apiParam {String} name Club name
 * @apiParam {String} short_name Club unique shortname
 * @apiParam {String} ground Club ground name
 * @apiParam {Date} founded Club founded date. Format: YYYY-MM-DD

 *
 * @apiSuccessExample {json} Success-Respose: 
								{ "status": true, "message": "", "response": { "name": "Ajax", "short_name": "AJX", "ground": "Johan Cruyff Arena", "founded": "1924-03-26", "updated_at": "2019-05-05 11:14:34", "created_at": "2019-05-05 11:14:34", "id": 10 } 
*/
Route::middleware('customer')->post('/clubs', 'Api\ClubsController@create')->name('clubsPost'); // Create a new club
/**
 * @api {post} clubs/:id Edit one club by ID
 * @apiName editClub
 * @apiGroup clubs
 *
 * @apiHeader {String} Customer-Access-Token The Customer-Access-Token returned by API requestCustomerAccessToken
 * @apiParam {Number} id Club unique ID
 * @apiParam {String} name Club name
 * @apiParam {String} short_name Club unique shortname
 * @apiParam {String} ground Club ground name
 * @apiParam {Date} founded Club founded date. Format: YYYY-MM-DD

 *
 * @apiSuccessExample {json} Success-Respose: 
								{ "status": true, "message": "", "response": { "id": 1, "name": "Barcelona", "founded": "2019-05-02", "short_name": "FCB", "ground": "Coup Nu", "created_at": null, "updated_at": null, "deleted_at": null }
*/
Route::middleware('customer')->post('/clubs/{id}', 'Api\ClubsController@edit')->name('clubsPut'); // Edit a club by ID
/**
 * @api {delete} clubs/:id Remove one club by ID
 * @apiName removeClub
 * @apiGroup clubs
 *
 * @apiHeader {String} Customer-Access-Token The Customer-Access-Token returned by API requestCustomerAccessToken
 * @apiParam {Number} id Club unique ID

 *
 * @apiSuccessExample {json} Success-Respose: 
								{ "status": true, "message": "Club deleted" } 
*/
Route::middleware('customer')->delete('/clubs/{id}', 'Api\ClubsController@remove')->name('clubsDelete'); // Delete a club by ID

/********************
 Players API
********************/
/**
 * @api {get} players Return All players
 * @apiName listPlayers
 * @apiGroup players
 *
 * @apiHeader {String} Customer-Access-Token The Customer-Access-Token returned by API requestCustomerAccessToken

 *
 * @apiSuccessExample {json} Success-Respose: 
								{ "status": true, "message": "", "response": [ { "id": 2, "club_id": 1, "name": "Luiz Suarez", "birthdate": "1924-03-26", "created_at": "2019-05-02 20:06:50", "updated_at": "2019-05-02 20:06:50", "deleted_at": null }, { "id": 4, "club_id": 8, "name": "Fabinho", "birthdate": "1993-10-23", "created_at": "2019-05-04 10:49:55", "updated_at": "2019-05-04 10:49:55", "deleted_at": null }, { "id": 5, "club_id": 8, "name": "Mohamed Salah", "birthdate": "1992-06-15", "created_at": "2019-05-04 10:50:15", "updated_at": "2019-05-04 10:50:15", "deleted_at": null }, { "id": 6, "club_id": 5, "name": "Toni Kroos", "birthdate": "1990-01-04", "created_at": "2019-05-04 10:51:06", "updated_at": "2019-05-04 10:51:06", "deleted_at": null }, { "id": 7, "club_id": 7, "name": "Niklas Süle", "birthdate": "1995-09-05", "created_at": "2019-05-04 10:51:54", "updated_at": "2019-05-04 10:51:54", "deleted_at": null } ] } 
*/
Route::middleware('customer')->get('/players', 'Api\PlayersController@index'); // List all players
/**
 * @api {get} players/:id Return one player by ID.
 * @apiName getPlayer
 * @apiGroup players
 *
 * @apiHeader {String} Customer-Access-Token The Customer-Access-Token returned by API requestCustomerAccessToken
 * @apiParam {Number} id Player unique ID.

 *
 * @apiSuccessExample {json} Success-Respose: 
								{ "status": true, "message": "", "response": { "id": 2, "club_id": "1", "name": "Neymar", "birthdate": "1924-03-26", "created_at": "2019-05-02 20:06:50", "updated_at": "2019-05-05 11:48:03", "deleted_at": null } } 
*/
Route::middleware('customer')->get('/players/{id}', 'Api\PlayersController@get'); // Return one player by ID
/**
 * @api {post} players Create a player
 * @apiName createPlayer
 * @apiGroup players
 *
 * @apiHeader {String} Customer-Access-Token The Customer-Access-Token returned by API requestCustomerAccessToken
 * @apiParam {String} name Player name
 * @apiParam {Number} club_id Player club
 * @apiParam {Date} birthdate Player birthdate date. Format: YYYY-MM-DD

 *
 * @apiSuccessExample {json} Success-Respose: 
								{ "status": true, "message": "", "response": { "name": "Joël Veltman", "club_id": "10", "birthdate": "1992-01-15", "updated_at": "2019-05-05 11:49:47", "created_at": "2019-05-05 11:49:47", "id": 8 } } 
*/
Route::middleware('customer')->post('/players', 'Api\PlayersController@create'); // Create a new player
/**
 * @api {post} players/:id Edit one player by ID
 * @apiName editPlayer
 * @apiGroup players
 *
 * @apiHeader {String} Customer-Access-Token The Customer-Access-Token returned by API requestCustomerAccessToken
 * @apiParam {Number} id Player unique ID
 * @apiParam {String} name Player name
 * @apiParam {Number} club_id Player club
 * @apiParam {Date} birthdate Player birthdate date. Format: YYYY-MM-DD

 *
 * @apiSuccessExample {json} Success-Respose: 
								{ "status": true, "message": "", "response": { "name": "Joël Veltman", "club_id": "10", "birthdate": "1992-01-15", "updated_at": "2019-05-05 11:49:47", "created_at": "2019-05-05 11:49:47", "id": 8 } }
*/
Route::middleware('customer')->post('/players/{id}', 'Api\PlayersController@edit'); // Edit a player by ID
/**
 * @api {delete} players/:id Remove one player by ID
 * @apiName removePlayer
 * @apiGroup players
 *
 * @apiHeader {String} Customer-Access-Token The Customer-Access-Token returned by API requestCustomerAccessToken
 * @apiParam {Number} id Player unique ID

 *
 * @apiSuccessExample {json} Success-Respose: 
								{ "status": true, "message": "Player deleted" } 
*/
Route::middleware('customer')->delete('/players/{id}', 'Api\PlayersController@remove'); // Delete a player by ID