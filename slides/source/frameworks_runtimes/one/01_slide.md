!SLIDE 
# Cloud Foundry Frameworks and Runtimes #

!SLIDE

## The vmc gem recognises your application type automatically  ##

!SLIDE

## Example vmc framework detection ##

    if File.exist?('config/environment.rb')
        return Framework.lookup('Rails')

!SLIDE

# Runtimes #

## A framework has a default runtime, which you can override at the command line ##

!SLIDE

## Overriding runtimes ##

    vmc push [appname] --runtime ruby19

!SLIDE bullets incremental smaller

# cloudfoundry.com frameworks #

* rails3
* grails
* sinatra
* spring
* node
* java_web
* lift

!SLIDE bullets

# cloudfoundry.com runtimes #

* node   | Node.js     | 0.4.12
* node06 | Node.js     | 0.6.8
* ruby18 | Ruby 1.8    | 1.8.7
* ruby19 | Ruby 1.9    | 1.9.2p180
* java   | Java 6      | 1.6

!SLIDE smaller

## Additional runtimes/frameworks are available in the github version ##

    Runtimes = %w[ruby18 ruby19 java node
        php erlangR14B02 python26]
    Frameworks = %w[sinatra rails3 java_web spring grails
        node php otp_rebar lift wsgi django unknown]