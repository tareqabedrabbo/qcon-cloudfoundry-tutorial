# QCon 2012 Cloud Foundry Tutorial

Dave Syer
- Senior Staff Engineer, VMware, London
- email: dsyer@vmware.com
- twitter: @david_syer

Colin Humphreys
- Director of Technology, Carrenza, London
- twitter: @hatofmonkeys

Tareq Abedrabbo
- Principal Consultant, OpenCredo, London
- email: tareq.abedrabbo@opencredo.com
- twitter: @tareq_abedrabbo

## Agenda

* Overview - cloudy slides
* Lab 0 - sign up for Cloud Foundry
* explain vmc use
* Lab 1 - install simple sinatra app to cloudfoundry.com
* micro cloud explanation
* Lab 2 - install micro cloud
* Lab 3 - use micro to install sinatra app
* runtimes
* Lab 4 - simple spring app
* services - summary slide on each service
* Lab 5 - spring app + service
* polyglot/devops fork

## Discussion Items

1. ALM - application lifecycle management * (C)
2. Security roadmap, identity management, OAuth 2, OpenID Connect ** (D)
3. Open Source installation (D)
4. Polyglot persistence + Cloud Architecture ** (T)
5. Customizing Cloudfoundry (C)
6. STS demo + tunnelling  (T)


## Checklist

* Intros + housekeeping: Find out experience levels of attendees

* What is Cloud Foundry?
   * Dev manifesto and general intro to CF
   * Arch overview

* Create + deploy apps
    * Spring (Mvn integration?) - Cloud profiles - sample apps on github
    * node
    * Sinatra
    * rails
    * lift/scala
    * Grails
    * Django
    * PHP/Wordpress

* Lifecycle
   * VMC
   * STS
   * ALM integration

* Data Services: what's there

* Polyglot data - show apps

* Tunneling.  E.g. rails console support.

* Creating Clouds
    * Micro cloudfoundry
    * cf.com
    * vcap: open source install

* Community
    * cloudfoundry.com
    * cloudfoundry.org
    * forums
    * twitter

* Road map

### Bonus:

* Additional applications.  Standalone and Spring Batch.
 
* Customising/extending
    * Chef
    * DEAs
    * Services
    * Multinode/scaling

* Operations
    * Manifests
    * Monitoring
    * Logging
    * Security/multi-tenancy

