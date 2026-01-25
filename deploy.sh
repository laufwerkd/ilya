#!/bin/bash
echo "Pulling latest changes"
git pull origin main

echo "Installing dependencies"
npm install

echo "Building Vue project"
npm run build

echo "Copying build to web root"
cp -r dist/* /httpdocs/
cp -r art /httpdocs/art

echo "Deployment complete"
