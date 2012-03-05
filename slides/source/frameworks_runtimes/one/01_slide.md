!SLIDE

# Cloud Foundry Frameworks and Runtimes

!SLIDE bullets incremental

# Frameworks

* Frameworks represent the environment your application will be provided with
* Frameworks have a default runtime that can be overridden at the command line
* The vmc gem recognises your application type automatically

!SLIDE bullets incremental

# Available Frameworks

* Spring
* Ruby on Rails
* Ruby and Sinatra
* Node.js
* Grails

!SLIDE

# Framework detection

The vmc gem will detect each framework, e.g.

    if File.exist?('config/environment.rb')
        return Framework.lookup('Rails')

!SLIDE bullets incremental

# Runtimes

* A runtime roughly equates to a version of a language
* Each framework has a default runtime
* Runtimes can be chosen when deploying your application

!SLIDE

# Overriding runtimes

    vmc push [appname] --runtime ruby19

!SLIDE bullets incremental

# cloudfoundry.com runtimes

* node   | Node.js     | 0.4.12
* node06 | Node.js     | 0.6.8
* ruby18 | Ruby 1.8    | 1.8.7
* ruby19 | Ruby 1.9    | 1.9.2p180
* java   | Java 6      | 1.6

!SLIDE small

# Something missing?

Additional runtimes/frameworks are available in the [github vcap](https://github.com/cloudfoundry/vcap)

    Runtimes = %w[ruby18 ruby19 java node
        php erlangR14B02 python26]

    Frameworks = %w[sinatra rails3 java_web spring grails
        node php otp_rebar lift wsgi django unknown]

!SLIDE

# Adding your own frameworks

The PHP pull request on [github](https://github.com/cloudfoundry/vcap/pull/118/files) is a good place to start.