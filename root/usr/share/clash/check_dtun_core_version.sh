#!/bin/sh

new_clashdtun_core_version=`curl -sL "https://github.com/Dreamacro/clash/releases/tag/premium" | grep '/Dreamacro/clash/releases/tag/premium' | tail -n 1 | awk '{ print $3}' | awk -F "<" '{print $1}'`
sleep 2
if [ "$?" -eq "0" ]; then
rm -rf /usr/share/clash/new_clashdtun_core_version
if [ $new_clashdtun_core_version ]; then
echo $new_clashdtun_core_version > /usr/share/clash/new_clashdtun_core_version 2>&1 & >/dev/null
elif [ $new_clashdtun_core_version =="" ]; then
echo 0 > /usr/share/clash/new_clashdtun_core_version 2>&1 & >/dev/null
fi
fi
