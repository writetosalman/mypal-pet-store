git remote add heroku https://git.heroku.com/mypal-pet-store.git
wget http://cli-assets.heroku.com/branches/stable/heroku-linux-amd64.tar.gz
mkdir -p /usr/local/lib /usr/local/bin
tar -xvzf heroku-linux-amd64.tar.gz -C /usr/local/lib
ln -s /usr/local/lib/heroku/bin/heroku /usr/local/bin/heroku

cat > ~/.netrc << EOF
login $HEROKU_LOGIN
password $HEROKU_API_KEY
EOF