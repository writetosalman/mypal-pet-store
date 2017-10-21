wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh

cat > ~/.netrc << EOF
login $HEROKU_LOGIN
password $HEROKU_API_KEY
EOF