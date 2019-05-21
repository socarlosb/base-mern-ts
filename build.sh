# clean up build folders
rm -rf src/server/build &
rm -rf src/client/build &
rm -rf src/server/logs &
rm -rf dist &
# make a new build
cd src/server && npm run build &
cd src/client && npm run build 
