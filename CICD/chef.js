bookmark
    https://learn.chef.io/manage-a-node/ubuntu/set-up-your-chef-server/
Chef helps you express your infrastructure policy – how your software is delivered and maintained on your servers – as code. When infrastructure is code, it becomes more maintainable, versionable, testable, and collaborative.


terminalogy
    -Resource: describes some piece of infrastructure, such as a file, template, or package
        -declares what state a specific part of the system should be in, now how to get there
        -chef runs magic in the background that instructs the system how to get there

    -resource actions: the process that achieves the desired configuration state
        :delete
        :create
        :enable
        :stop
        :install
        :disable

    -resource types
        directory
        file
            defualt action :create
        packages
            default action :install
        services
        template

    -Recipe: a file that groups related resources, e.g. everything needed to configure a web server, database server, or a load balancer
        -it is an ordered series of configuration states

    -cookbook : A cookbook provides structure to your recipes and enables you to more easily reference external files, such as our web servers home page. In essence, a cookbook helps you stay organized.
        -A cookbook groups together recipes and other information in a way that is more manageable than having just recipes alone.

    -role: groups multiple recipies


    -knife: command line tool that provides an interface between your workstation and the chef server
        -enables you to uplaod your cookbooks to the chef server and work with nodes
        -requires two files
            1.RSA private key
                chef server holds the public key
                you hold the private key
            2. configuration file
                named knife.rb
                    -contains Chef servers URL, location of RSA private key, default location cookbooks
        -knife looks for a .chef dir in the current directory, if found, it uses the RSA key and knife.rb configuration files
            -if not found, it goes up one dir and tries again, and continues


    -nodes: servers you manage via chef

    -chef supermarket: a place for the community to share cookbooks


knife commands
    knife ssl check #validates your connection to the chef server
    knife cookbook site download learn_chef_apache2
        -download cookbooks from the marketplace
        -learn_chef_apache2 is a cookbook name

        then run
            tar -zxvf DOWNLOADED_COOKBOOK_NAME -C cookbooks
                -this extracts the downloaded cookbook, and places the unzipped files in your cookbook dir

    knife cookbook upload learn_chef_apache2
        -uploadeds a specific cookbook to your server

    knife cookbook list
        -lists all of the isntalled cookbooks


chef nodes
    infrastructure
        -workstation: the computer from which you author yoru cookbooks and adminster your network. i.e. your personal laptop
        -chef server: the central repo fo ryour cookbooks as well as for information about every node it manages
        -node: anhy computer that is managed by a chef server.
            -every node has chef client installed on it
            -can be a physical server or virtual machine in your network


chef-client : runs chef recipies
    commands
        sudo chef-client --local-mode YOURRECIPE.rb
            run a single recipe
        sudo chef-client --local-mode --runlist 'recipe[learn_chef_apache2]'
            run a runlist

notes
    -If any resource is already in the desired state, Chef simply moves on to the next one.
    -Chef applies resources in the order they appear.

basic steps: MOTD example
    1.setup a chef repo in your home dir
        mkdir ~/chef-repo
    2.setup a recipe that configures the server
        in ~/chef-repo create a recipe file. hello.rb
            file '/tmp/motd' do #file = the resource
                #we dont hae action :create because this is the default action
                content 'hello world' #content is a command to insert text into a file
            end
    3. run chef-client in local mode
        $chef-client --local-mode hello.rb


basic steps: delete the MOTD example
    1. cd into your chef-repo
    2. create goodbye.rb
        file 'tmp/motd' do {
            action :delete
        end

basic steps: install the apache package and start the apache service
    1. cd into your chef-repo
    2. create webserver.rb
        package 'apache2'
        service 'apache2' do
            supports :status => true #tells chef that the apache2 init script supports the status message
            action [:enable, :start] #enable, then strt the apache service
        end

basic steps: create a file resource and specify some attributes
    file '/etc/motd' do
      action :create
      mode '0755'
      group 'root'
      owner 'root'
    end

basic steps: create a cookbook
    1. cd into chef repo
    2. mkdir cookbooks
    3. cd cookbooks
    4. chef generate cookbook YOURBOOKNAME


basic steps: generate a template and use it in a recipie
    1. cd into your chef repo, then into the appopropiate cookbooks
    2. chef generate template COOKBOONAME TEMPLATENAME
        template name, e.g. index.html
        cookbook name, e.g. learn_chef_apache2
    3. customize your template
        -its located in chef-repo/cookbookname/templates/default/template.name.erb
        -add a basic html page
            <html><body><h1> HI! this is my template
            </h1></body></html>
    4. update your recipe to use inspect
        package 'apache2'

        service 'apache2' do
            supports :status => true
            action [:enable, :start]
        end

        template '/var/www/html/index.html' do
            source 'index.html.erb'
        end
    5. run the recipe
        sudo chef-client --local-mode --runlist 'recipe[learn_chef_apache2]'



packer:
    https://www.packer.io/
    builders: describes the server image
    provisioners: describes how you put data onto the server

notes
    Bundler is a ruby tech that manages Ruby gems
    Berkshelf: cookbook dependency manager
    Packer

    -chef ignore : what should be excluded from the vendor cookbooks
other file notes
    cd blah && bundle exec berks && cmd3 blah
        && is bash for AND, so do 1, then do 2, etc

    brew:  mac osx package manager

GT order of operations:
    notes
        vagrant: used for creating a local environment that mimics the production setup
    1.build.sh is invoked
        A. remove existing vendor/cookbooks
        B. install latet version of vendor/cookbooks
        C.


other notes
    confirm server is running
        curl localhost #should return a webpage

deliradio-chef-repo

    the real
        chef does run every hour
        you can login to a server and force it to run chef

    what you cant do
        -you can cd into the deliradio-web repo and interact with the chef repo
        -you cant update any of hte cookbooks, as they installed community cookbooks, and then modified them

    definitions
        data_bags : holds anything that is sensitive, e.g. passwords, keyfiles, environments, etc


    /notes.md
        explains how to do add a base image to chef eco system

    /initchef.sh

    scripts:
        build_a_box:
        edit_data_bag: unknown
        vagrant_setup: obsolete
            uses ruby 1.9
        worker_data.json: unknown

    roles:
        -when it says 'recipi' its really installing default recipie within the cookbook with the same name
        checkout the eeliradio cookbook, it has a bunch of recipies

    steps
        builda box
            1. cd in delirado-chef-repo
            2. scripts/builda box
            3. enter in steps
            4. give server a name
            5. copy IP address of new server and add it to gateway 5 hosts

        how the chef wakes up
            /var/chef/runchef.sh


choose a ruby very to use
    chruby #see list
    chruby VERSION #pick a version

other commands
    gem install Bundler
    bundle
