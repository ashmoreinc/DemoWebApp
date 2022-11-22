#!/bin/bash

# Delete original src file
ssh -i $PEM_LOC ec2-user@$WEB_APP_ADDR
cd /home/ec2-user/
rm -rf ./src
exit

# Copy over new src file
echo Copying the build files to deployment server
scp -i $PEM_LOC -r ./* ec2-user@$WEB_APP_ADDR:/home/ec2-user/src


# Start the new build
echo Attempting to connect to deployment server
ssh -i $PEM_LOC ec2-user@$WEB_APP_ADDR

cd /home/ec2-user/src

./start

echo Greate success!
