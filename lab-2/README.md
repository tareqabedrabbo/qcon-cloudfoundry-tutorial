# Micro Cloud Installation

In this lab we will install Cloud Foundry as a Micro Cloud on a
laptop.

Micro Cloud Foundry (MicroCloud or MCF) is a shrink-wrapped virtual
appliance that anyone can run to get a Cloud Foundry instance on their
desktop.  There is a download link for MicroCloud on the main
[Cloud Foundry website](http://www.cloudfoundry.com).  Once you have
registered with Cloud Foundry you can use your account to get a
MicroCloud instance.  Or ask your Tuturial hosts for a USB key.

The MCF can be imported as a virtual machine image into a virtual
player (e.g. VMware Player on Windows or Linux, VMware Fusion on Mac).
Follow the instructions on the web or in the download bundle.

# A simple hello world app.

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

To push to cloudfoundry you need a unique name for your app.
Substitute your mcf subdomain (obtained when you register) for
`<my-mcf>` below.

    vmc target api.<my-mcf>.cloudfoundry.com
    vmc login
    vmc push env --instances 4 --mem 64M -n

## Test it in the browser:

Go to `http://env.<my-mcf>.cloudfoundry.com` in a browser.

Note that hitting refresh will show a different port in each refresh reflecting the different active instances

## Check the status of your app by running:

    vmc apps

Which should yield the following output:

    +-------------+----+---------+--------------------------------+----------+
    | Application | #  | Health  | URLS                           | Services |
    +-------------+----+---------+--------------------------------+----------+
    | env         | 4  | RUNNING | env.<my-mcf>>.cloudfoundry.com |          |
    +-------------+----+---------+--------------------------------+----------+
