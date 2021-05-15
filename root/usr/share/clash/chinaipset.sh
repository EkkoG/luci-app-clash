echo "create china hash:net family inet hashsize 1024 maxelem 65536" > /tmp/china.ipset
awk '!/^$/&&!/^#/{printf("add china %s'" "'\n",$0)}' /usr/share/clash/china_ip.txt >> /tmp/china.ipset
ipset -! flush china
ipset -! restore < /tmp/china.ipset 2>/dev/null
rm -f /tmp/china.ipset
 

echo "create china6 hash:net family inet6 hashsize 1024 maxelem 65536" > /tmp/china6.ipset
awk '!/^$/&&!/^#/{printf("add china6 %s'" "'\n",$0)}' /usr/share/clash/china_ip6.txt >> /tmp/china6.ipset
ipset -! flush china6
ipset -! restore < /tmp/china6.ipset 2>/dev/null
rm -f /tmp/china6.ipset