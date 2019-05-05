define({ "api": [
  {
    "type": "post",
    "url": "clubs",
    "title": "Create a club",
    "name": "createClub",
    "group": "clubs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Customer-Access-Token",
            "description": "<p>The Customer-Access-Token returned by API requestCustomerAccessToken</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Club name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_name",
            "description": "<p>Club unique shortname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ground",
            "description": "<p>Club ground name</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "founded",
            "description": "<p>Club founded date. Format: YYYY-MM-DD</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Respose: ",
          "content": "{ \"status\": true, \"message\": \"\", \"response\": { \"name\": \"Ajax\", \"short_name\": \"AJX\", \"ground\": \"Johan Cruyff Arena\", \"founded\": \"1924-03-26\", \"updated_at\": \"2019-05-05 11:14:34\", \"created_at\": \"2019-05-05 11:14:34\", \"id\": 10 }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "clubs"
  },
  {
    "type": "post",
    "url": "clubs/:id",
    "title": "Edit one club by ID",
    "name": "editClub",
    "group": "clubs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Customer-Access-Token",
            "description": "<p>The Customer-Access-Token returned by API requestCustomerAccessToken</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Club unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Club name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_name",
            "description": "<p>Club unique shortname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ground",
            "description": "<p>Club ground name</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "founded",
            "description": "<p>Club founded date. Format: YYYY-MM-DD</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Respose: ",
          "content": "{ \"status\": true, \"message\": \"\", \"response\": { \"id\": 1, \"name\": \"Barcelona\", \"founded\": \"2019-05-02\", \"short_name\": \"FCB\", \"ground\": \"Coup Nu\", \"created_at\": null, \"updated_at\": null, \"deleted_at\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "clubs"
  },
  {
    "type": "get",
    "url": "clubs/:id",
    "title": "Return one club by ID.",
    "name": "getClub",
    "group": "clubs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Customer-Access-Token",
            "description": "<p>The Customer-Access-Token returned by API requestCustomerAccessToken</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Club unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Respose: ",
          "content": "{ \"status\": true, \"message\": \"\", \"response\": { \"id\": 1, \"name\": \"Barcelona\", \"founded\": \"2019-05-02\", \"short_name\": \"FCB\", \"ground\": \"Coup Nu\", \"created_at\": null, \"updated_at\": null, \"deleted_at\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "clubs"
  },
  {
    "type": "get",
    "url": "clubs",
    "title": "Return All CLubs",
    "name": "listClubs",
    "group": "clubs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Customer-Access-Token",
            "description": "<p>The Customer-Access-Token returned by API requestCustomerAccessToken</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Respose: ",
          "content": "{ \"status\": true, \"message\": \"\", \"response\": [ { \"id\": 1, \"name\": \"Barcelona\", \"founded\": \"2019-05-02\", \"short_name\": \"FCB\", \"ground\": \"Coup Nu\", \"created_at\": null, \"updated_at\": null, \"deleted_at\": null }, { \"id\": 5, \"name\": \"Real Madrid Club de Fútbol\", \"founded\": \"1902-03-06\", \"short_name\": \"RMA\", \"ground\": \"Santiago Bernabéu\", \"created_at\": \"2019-05-04 10:36:05\", \"updated_at\": \"2019-05-04 10:36:05\", \"deleted_at\": null }, { \"id\": 6, \"name\": \"Associazione Calcio Milan\", \"founded\": \"1899-12-13\", \"short_name\": \"ACM\", \"ground\": \"San Siro\", \"created_at\": \"2019-05-04 10:36:46\", \"updated_at\": \"2019-05-04 10:36:46\", \"deleted_at\": null }, { \"id\": 7, \"name\": \"Fußball-Club Bayern München e. V.\", \"founded\": \"1900-02-27\", \"short_name\": \"BMH\", \"ground\": \"Allianz Arena\", \"created_at\": \"2019-05-04 10:39:06\", \"updated_at\": \"2019-05-04 10:39:06\", \"deleted_at\": null }, { \"id\": 8, \"name\": \"Liverpool Football Club\", \"founded\": \"1892-06-03\", \"short_name\": \"LFC\", \"ground\": \"Anfield\", \"created_at\": \"2019-05-04 10:39:52\", \"updated_at\": \"2019-05-04 10:39:52\", \"deleted_at\": null } ] }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "clubs"
  },
  {
    "type": "delete",
    "url": "clubs/:id",
    "title": "Remove one club by ID",
    "name": "removeClub",
    "group": "clubs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Customer-Access-Token",
            "description": "<p>The Customer-Access-Token returned by API requestCustomerAccessToken</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Club unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Respose: ",
          "content": "{ \"status\": true, \"message\": \"Club deleted\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "clubs"
  },
  {
    "type": "get",
    "url": "customers/requestCustomerAccessToken",
    "title": "Return Customer Access Token",
    "name": "requestCustomerAccessToken",
    "group": "customers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>OAuth Authorization String, using sha256 encrypt passing your client_id, client_secret and nonce.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Generation Authorization (PHP): ",
          "content": "$customer_key = \"key123\";\n$customer_secret = \"secret123\";\n$nonce = time();\n$signature = hash_hmac('sha256', $customer_key.$nonce, $customer_secret);\n$oauth_string = 'oauth_consumer_key=\"'.$customer_key.'\", oauth_signature_method=\"HMAC-SHA1\", oauth_signature=\"'.$signature.'\", oauth_timestamp=\"'.$nonce.'\", oauth_nonce=\"'.$nonce.'\", oauth_version=\"1.0\"';",
          "type": "String"
        },
        {
          "title": "Authorization-Example:",
          "content": "OAuth oauth_consumer_key=\"key123\", oauth_signature_method=\"HMAC-SHA1\", oauth_signature=\"cdaa668d0c95a686ebd96ba9d4b84ca52c7372ad4e398c687f5e443b051ddc65\", oauth_timestamp=\"1557052957\", oauth_nonce=\"1557052957\", oauth_version=\"1.0\"",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Respose: ",
          "content": "{\"id\": 2,\"customer_access_token\": \"16f72f3faa21a22372c8cd3776547c52\",\"customer_access_token_expire_at\": 1557096379}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "customers"
  },
  {
    "type": "post",
    "url": "players",
    "title": "Create a player",
    "name": "createPlayer",
    "group": "players",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Customer-Access-Token",
            "description": "<p>The Customer-Access-Token returned by API requestCustomerAccessToken</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Player name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "club_id",
            "description": "<p>Player club</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Player birthdate date. Format: YYYY-MM-DD</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Respose: ",
          "content": "{ \"status\": true, \"message\": \"\", \"response\": { \"name\": \"Joël Veltman\", \"club_id\": \"10\", \"birthdate\": \"1992-01-15\", \"updated_at\": \"2019-05-05 11:49:47\", \"created_at\": \"2019-05-05 11:49:47\", \"id\": 8 } }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "players"
  },
  {
    "type": "post",
    "url": "players/:id",
    "title": "Edit one player by ID",
    "name": "editPlayer",
    "group": "players",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Customer-Access-Token",
            "description": "<p>The Customer-Access-Token returned by API requestCustomerAccessToken</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Player unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Player name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "club_id",
            "description": "<p>Player club</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Player birthdate date. Format: YYYY-MM-DD</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Respose: ",
          "content": "{ \"status\": true, \"message\": \"\", \"response\": { \"name\": \"Joël Veltman\", \"club_id\": \"10\", \"birthdate\": \"1992-01-15\", \"updated_at\": \"2019-05-05 11:49:47\", \"created_at\": \"2019-05-05 11:49:47\", \"id\": 8 } }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "players"
  },
  {
    "type": "get",
    "url": "players/:id",
    "title": "Return one player by ID.",
    "name": "getPlayer",
    "group": "players",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Customer-Access-Token",
            "description": "<p>The Customer-Access-Token returned by API requestCustomerAccessToken</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Player unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Respose: ",
          "content": "{ \"status\": true, \"message\": \"\", \"response\": { \"id\": 2, \"club_id\": \"1\", \"name\": \"Neymar\", \"birthdate\": \"1924-03-26\", \"created_at\": \"2019-05-02 20:06:50\", \"updated_at\": \"2019-05-05 11:48:03\", \"deleted_at\": null } }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "players"
  },
  {
    "type": "get",
    "url": "players",
    "title": "Return All players",
    "name": "listPlayers",
    "group": "players",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Customer-Access-Token",
            "description": "<p>The Customer-Access-Token returned by API requestCustomerAccessToken</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Respose: ",
          "content": "{ \"status\": true, \"message\": \"\", \"response\": [ { \"id\": 2, \"club_id\": 1, \"name\": \"Luiz Suarez\", \"birthdate\": \"1924-03-26\", \"created_at\": \"2019-05-02 20:06:50\", \"updated_at\": \"2019-05-02 20:06:50\", \"deleted_at\": null }, { \"id\": 4, \"club_id\": 8, \"name\": \"Fabinho\", \"birthdate\": \"1993-10-23\", \"created_at\": \"2019-05-04 10:49:55\", \"updated_at\": \"2019-05-04 10:49:55\", \"deleted_at\": null }, { \"id\": 5, \"club_id\": 8, \"name\": \"Mohamed Salah\", \"birthdate\": \"1992-06-15\", \"created_at\": \"2019-05-04 10:50:15\", \"updated_at\": \"2019-05-04 10:50:15\", \"deleted_at\": null }, { \"id\": 6, \"club_id\": 5, \"name\": \"Toni Kroos\", \"birthdate\": \"1990-01-04\", \"created_at\": \"2019-05-04 10:51:06\", \"updated_at\": \"2019-05-04 10:51:06\", \"deleted_at\": null }, { \"id\": 7, \"club_id\": 7, \"name\": \"Niklas Süle\", \"birthdate\": \"1995-09-05\", \"created_at\": \"2019-05-04 10:51:54\", \"updated_at\": \"2019-05-04 10:51:54\", \"deleted_at\": null } ] }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "players"
  },
  {
    "type": "delete",
    "url": "players/:id",
    "title": "Remove one player by ID",
    "name": "removePlayer",
    "group": "players",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Customer-Access-Token",
            "description": "<p>The Customer-Access-Token returned by API requestCustomerAccessToken</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Player unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Respose: ",
          "content": "{ \"status\": true, \"message\": \"Player deleted\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "players"
  }
] });
