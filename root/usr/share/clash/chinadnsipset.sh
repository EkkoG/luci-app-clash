echo "create china_dns hash:net family inet hashsize 1024 maxelem 65536" > /tmp/china_dns.ipset
awk '!/^$/&&!/^#/{printf("add china_dns %s'" "'\n",$0)}' /usr/share/clash/china_dns.txt >> /tmp/china_dns.ipset
ipset -! flush china_dns
ipset -! restore < /tmp/china_dns.ipset 2>/dev/null
rm -f /tmp/china_dns.ipset

echo "create china_dns6 hash:net family inet6 hashsize 1024 maxelem 65536" > /tmp/china_dns6.ipset
awk '!/^$/&&!/^#/{printf("add china_dns6 %s'" "'\n",$0)}' /usr/share/clash/china_dns6.txt >> /tmp/china_dns6.ipset
ipset -! flush china_dns6
ipset -! restore < /tmp/china_dns6.ipset 2>/dev/null
rm -f /tmp/china_dns6.ipset