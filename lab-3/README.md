# A simple hello world app on MCF.

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
      "<h1>Hello from the Cloud! via: #{host}:#{port}</h1>"
    end

    get '/env' do
      res = ''
      ENV.each do |k, v|
        res << "#{k}: #{v}<br/>"
      end
      res
    end

## Create & push a 4 instance version of the test app, like so:

Substitute your mcf subdomain (obtained when you register) for
`<my-mcf>` below.

    vmc target api.<my-mcf>.cloudfoundry.me
    vmc login
    vmc push env --instances 4 --mem 64M -n

## Test it in the browser:

Go to `http://env.<my-mcf>.cloudfoundry.me` in a browser.

Note that hitting refresh will show a different port in each refresh reflecting the different active instances

## Check the status of your app by running:

    vmc apps

Which should yield the following output:

    +-------------+----+---------+--------------------------------+----------+
    | Application | #  | Health  | URLS                           | Services |
    +-------------+----+---------+--------------------------------+----------+
    | env         | 4  | RUNNING | env.<my-mcf>>.cloudfoundry.me  |          |
    +-------------+----+---------+--------------------------------+----------+
