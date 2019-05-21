# copy files to dist/
mkdir --parents dist &
cp -a src/server/package*.json dist/ &
cp -a deploy-files/. dist &
cp -a src/client/build/. dist/public/ &
cp -a src/server/build/. dist/