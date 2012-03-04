!SLIDE 
# CloudFoundry Services #

!SLIDE bullets incremental
# Services #

* Data services
* Messaging services
* Other services
* Adding your own services
* Consuming services

!SLIDE bullets incremental

# Data Services #

* MySQL
* PostgreSQL

!SLIDE bullets incremental

# Messaging Services #

* RabbitMQ

!SLIDE bullets incremental

# Other Services #

* Redis
* MongoDB

!SLIDE bullets incremental

# Adding your own services #

* Write your own
* Service broker (coming soon)

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
