# Demo Node App
This is a demo application which hosts a simple web server which hosts a single page.

-----
### Pre-requisites
In order to use ssl/https you will need to create and store a selfsigned certificate and key and then store these under ./certs/
If this is not done, the program will detect an error when reading the files and prevent running the https, so doing this is 
not required if you do not want https.

-----
### Testing
There is a flag in demoFuncs called PASS_TEST; when this flag is set to false then it is reflected on the page returned 
by the web server, it will also cause the only test in the system to fail. This can be used to test a CI/CD Pipeline.

