# A simple hello world app.

In this lab, we will create a simple application in the Ruby framework
[Sinatra](http://www.sinatrarb.com/) and then deploy it in Cloud
Foundry.

(From [VCAP README](https://github.com/cloudfoundry/vcap).)

## Create the app

Create an empty directory for your test app (lets call it env), and enter it.

    mkdir env && cd env

Cut and paste the following app into a ruby file (lets say `env.rb`):

    require 'rubygems'
    require 'sinatra'

    get '/' do
      host = ENV['VMC_APP_HOST']
      port = ENV['VMC_APP_PORT']
      "<h1>XXXXX Hello from the Cloud! via: #{host}:#{port}</h1>"
    end

    get '/env' do
      res = ''
      ENV.each do |k, v|
        res << "#{k}: #{v}<br/>"
      end
      res
    end

## Create & push a 4 instance version of the test app, like so:

To push to cloudfoundry you need a unique name for your app.
Substitute something unique (like your name) for `<unique>` below.

    vmc target api.cloudfoundry.com
    vmc login
    vmc push <unique>env --instances 4 --mem 64M -n

## Test it in the browser:

Go to `http://<unique>env.cloudfoundry.com` in a browser.

Note that hitting refresh will show a different port in each refresh reflecting the different active instances

## Check the status of your app by running:

    vmc apps

Which should yield the following output:

    +-------------+----+---------+------------------------------+----------+
    | Application | #  | Health  | URLS                         | Services |
    +-------------+----+---------+------------------------------+----------+
    | env         | 4  | RUNNING | <unique>env.cloudfoundry.com |          |
    +-------------+----+---------+------------------------------+----------+
