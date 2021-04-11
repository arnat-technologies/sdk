chown $(whoami) node_modules
yarn install

echo ">>> POSTINSTALL RUNNING"
. /home/$(whoami)/.user/dotfiles/.scripts/00-ENVIRONMENT.sh
