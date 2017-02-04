<?php
virtual hosting: method for hosting multipel domain names with
separate handling of each name on a single server or pool of servers
https://en.wikipedia.org/wiki/Virtual_hosting

	this allows one server to share its resources, e.g. memory &
	processor cycles, without requiring all services provided
	to use* the same host name

	types of virtual hosting
		name-based: uses the host name presented by the client, this
		saves the IP addresses and the associated admin overhead but
		the protocol being served msut supply the host name an
		appropriate point
			difficult to with SSL/TLS
				you must use* a single certificate to cover all host names
				through wildcards

			i.e. uses multiple host names for the same IP address

			example:
				a server could be receiving requests for two domains,
				.example.com and www.example.net, both of which
				resolve to the same IP address. For www.example.com,
				the server would send the HTML file from the directory
				/var/www/user/Joe/site/, while requests for
				www.example.net would make the server serve pages from
				/var/www/user/Mary/site/. Equally two subdomains of the
				same domain may be hosted together. For instance, a blog
				server may host both blog1.example.com and
				blog2.example.com.

			SSL
		ip-based: uses separate IP addresses for each host name, and
		it can be performed with any protocol but requires a
		dedicated IP address per domain served

		name + ip based virtual hosting can be combined

apache virtual host documentation
http://httpd.apache.org/docs/2.0/vhosts/

	name based virtual host

		1. configure your DNS server to map each hostname to the
		correct IP address

		2. configure the Apache HTTP Server to recognize the
		different host names

		3. create a <VirtualHost> block for each distinct host that
		you would like to server. The argument to the <VirtualHost> block
		directive should be the same as the argument to the NameVirtualHost
		directive
			a. inside each <VirtualHost> block, you need:
				1.ServerName directive to designate which host is served
				2.DocumentRoot directive to show where in the filesystem
				the content for that host lives
			b. if adding virtual hosts to an existing web server, you must
			also create a <VirtualHost> block for the existing host.
				a. the ServerName and DocumentRoot included in this virtual host
				should be the same as the global ServerName and DocumentRoot
				b. list this virtual host first in the configuration file
				so that it will act as the default host

		4. how it works
			a. when a request arrives, the server will check
			if it is using an IP address that matches the NameVirtualHost

			b. if A is true, it will look at each <VirtualHost> directive
			with a matching IP address and try to find one where the
			ServerName or ServerAlias matches the requested hostname

			c. if B is true, it uses the configuration for that server

			d. if B is not true, then the FIRST LISTED VIRTUAL HOST that
			matches the IP address will be ncurses_use_default_colors(
				)
	example 1
		you are serving the domain www.domain.tld
			and you wish to add the virtual host www.otherdomain.tld,
			which points at the same IP address.

		your httpd.conf should look like this

			NameVirtualHost *:80

			<VirtualHost *:80>
			ServerName www.domain.tld
			ServerAlias domain.tld *.domain.tld
			DocumentRoot /www/domain
			</VirtualHost>

			<VirtualHost *:80>
			ServerName www.otherdomain.tld
			DocumentRoot /www/otherdomain
			</VirtualHost>

other examples
http://httpd.apache.org/docs/2.0/vhosts/examples.html


http://wiki.dreamhost.com/Configure_Apache_on_Fedora_or_Centos
	create custom virtual hosts in etc/httpd/conf.d/somefilename.conf
		for each site you wish to configure
			name a file similar to your site in /etc/httpd/conf.d/
			directory

ssl virtual hosts
	http://wiki.apache.org/httpd/NameBasedSSLVHostsWithSNI

definitions

	ServerName: the name server
	ServerAlias: other domains that users can use* to access ServerName
