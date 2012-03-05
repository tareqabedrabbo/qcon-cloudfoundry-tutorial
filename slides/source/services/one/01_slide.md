!SLIDE

# Cloud Foundry Services #

!SLIDE bullets incremental

# Services #

* Available services
* Adding your own services
* Consuming services
* Tunneling to services

!SLIDE bullets incremental

## _Name_ MySQL
* _They say_ -  MySQL is proven as the world's most popular open source database.
* _We say_ -  Useful for small-scale relational data, but don't push it hard.
* _A new service is_ - A new user and database in MySQL.

!SLIDE bullets incremental

## _Name_ PostgreSQL
* _They say_ -  PostgreSQL is a powerful, open source object-relational database system.
* _We say_ -  The closest you'll get to Oracle without selling your organs .
* _A new service is_ - A new user and database in PostgreSQL.

!SLIDE bullets incremental

## _Name_ Redis
* _They say_ -  Redis is an open source, advanced key-value store.
* _We say_ -  Blisteringly quick. Powers youporn.com.
* _A new service is_ - A new redis instance.

!SLIDE bullets incremental

## _Name_ MongoDB
* _They say_ -  JSON-style documents with dynamic schemas offer simplicity and power.
* _We say_ -  Powerful and flexible, but has had some high-profile knocks recently.
* _A new service is_ - A new MongoDB instance.

!SLIDE bullets incremental

## _Name_ Neo4J
* _They say_ -  Neo4j is a high-performance, NOSQL graph database.
* _We say_ -  Great features, but challenging to scale.
* _A new service is_ - A new Neo4J instance

!SLIDE bullets incremental

## _Name_ RabbitMQ
* _They say_ -  Messaging that just works.
* _We say_ -  Messaging that just works.
* _A new service is_ - A new user and vhost in RabbitMQ.

!SLIDE bullets incremental

# Adding your own services #

* Write your own. See [github](https://github.com/cloudfoundry/vcap-services) for examples

* Service broker (coming soon). This will allow you to easily bind existing services

!SLIDE small code

# Consuming services

    # Lists of services available and provisioned
    services

    # Create a provisioned service
    create-service <service> [--name,--bind]

    # Create a provisioned service and assign it <name>
    create-service <service> <name>

    # Create a provisioned service and assign it <name>,
    # and bind to <app>
    create-service <service> <name> <app>

!SLIDE small code

# Consuming services (cont.)

    # Delete a provisioned service
    delete-service [servicename]

    # Bind a service to an application
    bind-service <servicename> <appname>

    # Unbind service from the application
    unbind-service <servicename> <appname>

    # Clone service bindings from <src-app> application
    # to <dest-app>
    clone-services <src-app> <dest-app>

!SLIDE

# Tunneling services

* Uses caldecott gem
* Small sinatra application to bind
* Currently requires beta version of client
* Use local client to interact with remote services

!SLIDE code

# Tunneling services (cont.)

    gem install vmc --pre

    gem install caldecott

    vmc tunnel mysql-service