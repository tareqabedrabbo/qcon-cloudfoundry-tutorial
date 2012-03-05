# A Simple Spring app with service.

In this lab, we will create and deploy a simple Spring application to CloudFoundry and bind it to four different services: MySql, MongoDB, Redis and RabbitMQ.
This app uses profiles from Spring 3.1 to define a local default profile and a cloud profile. The cloud profile uses the cloud namespace (http://schema.cloudfoundry.org/spring) to define datasources and connection factories that bind to Cloud Foundry services. 

	<beans profile="default">
		<jdbc:embedded-database id="dataSource"/>
		<bean id="mongoDbFactory" class="org.springframework.data.document.mongodb.SimpleMongoDbFactory">
			<constructor-arg>
				<bean class="com.mongodb.Mongo"/>
			</constructor-arg>
			<constructor-arg value="hello"/>
		</bean>
		<bean id="rabbitConnectionFactory" class="org.springframework.amqp.rabbit.connection.CachingConnectionFactory"/>
		<bean id="redis" class="org.springframework.data.redis.connection.jedis.JedisConnectionFactory"/>
	</beans>

	<beans profile="cloud">
		<cloud:data-source id="dataSource"/>
		<cloud:mongo-db-factory id="mongoDbFactory"/>
		<cloud:rabbit-connection-factory id="rabbitConnectionFactory"/>
		<cloud:redis-connection-factory id="redisConnectionFactory"/>
	</beans>

## Build the app

Go under the lab-5 and build the app using Maven:

	$ mvn package

## Deploy the app and create the services

We need now to create and bind the services that the app is expecting. While we can simply do that during the vmc push command - just the way we did in the previous lab - we will only do it for the MySql service. We will add the other services separately later as a way of exploring the possibilities allowed by vmc:

	$ vmc push hello-spring --path target --no-start

Notice that we added the --no-start option because we don't want the app to start once it's pushed, not before adding the remaining services at least. Again, when propmted to bind a service, create a MySql instance:

	Create services to bind to 'hello-spring'? [yN]: y
	1: mongodb
	2: mysql
	3: postgresql
	4: rabbitmq
	5: redis
	What kind of service?: 2
	Specify the name of the service [mysql-f0a19]: 

At this point vmc apps should give:

	+--------------+----+---------+------------------------------------+-------------+
	| Application  | #  | Health  | URLS                               | Services    |
	+--------------+----+---------+------------------------------------+-------------+
	| hello-spring | 1  | STOPPED | hello-spring.tareq.cloudfoundry.me | mysql-f0a19 |
	+--------------+----+---------+------------------------------------+-------------+

## Listing avaialble services

You can at any point list the available services:

	$ vmc services

And you will get:

	============== System Services ==============

	+------------+---------+---------------------------------------+
	| Service    | Version | Description                           |
	+------------+---------+---------------------------------------+
	| mongodb    | 1.8     | MongoDB NoSQL store                   |
	| mysql      | 5.1     | MySQL database service                |
	| postgresql | 9.0     | PostgreSQL database service (vFabric) |
	| rabbitmq   | 2.4     | RabbitMQ messaging service            |
	| redis      | 2.2     | Redis key-value store service         |
	+------------+---------+---------------------------------------+

	=========== Provisioned Services ============

	+-------------+---------+
	| Name        | Service |
	+-------------+---------+
	| mysql-f0a19 | mysql   |
	+-------------+---------+

## Creating and binding services

Creating services is done through the create-service command:

	$ vmc create-service mongodb
	Creating Service [mongodb-60b6d]: OK

We can give services names, instead of the generated ones:

	$ vmc create-service redis myredis
	Creating Service: OK

Binding a service to an application is just as simple:

	$ vmc bind-service mongodb-60b6d hello-spring
	Binding Service [mongodb-60b6d]: OK

	$ vmc bind-service myredis hello-spring
	Binding Service [myredis]: OK

We can combine the two steps in one command:

	$ vmc create-service rabbitmq myrabbit hello-spring
	Creating Service: OK
	Binding Service [myrabbit]: OK

At this stage you can run vmc apps to verify what we just did:

	$ vmc apps

	+--------------+----+---------+------------------------------------+-----------------------------------------------+
	| Application  | #  | Health  | URLS                               | Services                                      |
	+--------------+----+---------+------------------------------------+-----------------------------------------------+
	| hello-spring | 1  | STOPPED | hello-spring.tareq.cloudfoundry.me | myrabbit, myredis, mongodb-60b6d, mysql-f0a19 |
	+--------------+----+---------+------------------------------------+-----------------------------------------------+


## Starting the app

Start the app:

	$ vmc start hello-spring

You can check the log to make sure everything is ok:

	$ vmc logs hello-spring

## Checking the app in a browser

In your browser go to http://hello-spring.&lt;username&gt;.cloudfoundry.me. You should get something similar to the following:

	The following services are bound to this application:

	Data Source: jdbc:mysql://127.0.0.1:3306/d809c4ac079614c62a9e604ac1ba3727e

	Redis: 127.0.0.1:5001

	MongoDB: 127.0.0.1:25004

	RabbitMQ: 172.16.42.130:21712

## Bonus points

In your browser go to http://hello-spring.&lt;username&gt;.cloudfoundry.me/env and try to identify the configuration values of the services that we defined.


