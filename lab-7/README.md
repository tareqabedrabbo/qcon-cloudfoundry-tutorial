# Crashing app

This lab contains an application that simulate crashes whenever its url is invoked. Cloud Foundry detects that an application crashed whenever it exists with a non-zero code.

## Deploying the app

Push the Node.js app and accept all the defaults:

	$ vmc push crash

## Simulating crashes

Go to the application's url using curl or the browser:

	$ curl curl http://crash.<username>.cloudfoundry.me

You can now type the following command to inspect the history of crashes:

	$ vmc crashes crash

	+---------+----------------------------------+--------------------+
	| Name    | Instance ID                      | Crashed Time       |
	+---------+----------------------------------+--------------------+
	| crash-1 | 79e45c5d00395ba6da2190c6b06f7931 | 03/05/2012 06:45PM |
	+---------+----------------------------------+--------------------+

If you type vmc apps, you can see that the application has been restarted automatically when it crashed.
