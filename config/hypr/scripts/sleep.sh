#! /usr/bin/env sh

if [ "$1" = "on" ]; then
	killall swayidle
	if [ "$2" != "silent" ]; then
		dunstify -a "Swayidle" -b "Sleep on" -i display-brightness-symbolic -u normal -u normal -r 91190 -t 3000
	fi
	swayidle -w timeout 300 'swaylock -f -c 000000' \
		timeout 600 'hyprctl dispatch dpms off' \
		timeout 900 'systemctl suspend' \
		resume 'hyprctl dispatch dpms on' \
		before-sleep 'swaylock -f -c 000000' &
elif [ "$1" = "off" ]; then
	killall swayidle
	dunstify -a "Swayidle" -b "Sleep off" -i display-brightness-off-symbolic -u normal -u normal -r 91190 -t 3000
elif [ "$1" = "dpms" ]; then
	swaylock -f -c 000000
	hyprctl dispatch dpms off
else
	swaylock -f -c 000000
	systemctl suspend
fi
