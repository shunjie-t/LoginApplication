cd src/main/frontend

if [ $1 == "install" ]
then
    echo "installing node packages"
    npm install
fi

echo "starting server"
npm start