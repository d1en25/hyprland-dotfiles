#!/usr/bin/env sh

if [ -z "$XDG_PICTURES_DIR" ] ; then
    XDG_PICTURES_DIR="$HOME/Pictures"
fi

save_dir="${2:-$XDG_PICTURES_DIR}/Screenshots"
save_file=$(date +'%y-%m-%d_%H-%M-%S_screenshot.png')

if [ ! -d "$save_dir" ] ; then
    mkdir -p $save_dir
fi

case $1 in
p) grim $save_dir/$save_file ;;
s) grim -g "$(slurp)" - | swappy -f - ;;
*)  echo "...valid options are..."
    echo "p : print screen to $save_dir"
    echo "s : snip current screen to $save_dir"   
    exit 1 ;;
esac

if [ -f "$save_dir/$save_file" ] ; then
    dunstify $ncolor "Screenshot saved" -i "$save_dir/$save_file" -r 91190 -t 2200
fi
