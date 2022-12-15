import { Injectable } from '@angular/core';
import { SingleChoiceFragen } from './single-choice-fragen';

@Injectable({
  providedIn: 'root'
})
export class SingleChoiceFragenService {
singlechoicefragen: SingleChoiceFragen[];

  constructor() {

    this.singlechoicefragen = [
      {
        qtyp:"scf",
        counts: 1, /*QUESTION 2 */
        question:`Which of the following is a valid IPv6 address?`,
        choices:["A. 2001:db8:0g21::1",
        "B. 2001::db8:4581::1",
        "C. 2001:db8:3241::1",
        "D. 2001%db8%9990%%1",
        "E. 2001.db8.819f..1",],
        answers1:"C",

      },
      {
        qtyp:"scf",
        counts: 2, /*QUESTION 5 */
        question:`Which of the following tools, used for DNS debugging, reports not only the response from the name
        sever but also details about the query?`,
        choices:["A. dnsq",
        "B. hostname",
        "C. dig",
        "D. dnslookup",
        "E. zoneinfo",],
        answers1:"C"
      },
      {
        qtyp:"scf",
        counts: 3, /*QUESTION 6 */
        question:`Which of the following statements is valid in the file /etc/nsswitch.conf?`,
        choices:["A. multi on",
        "B. 192.168.168.4 dns-server",
        "C. namespaces: net mount procs",
        "D. include /etc/nsswitch.d/",
        "E. hosts: files dns",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 4, /*QUESTION 8 */
        question:`On a Linux workstation, the route command takes a long time before printing out the routing table.
        Which of the following errors does that indicate?`,
        choices:["A. The local routing information may be corrupted and must be re-validated using a routing protocol.",
        "B. One of the routers in the routing table is not available which causes the automatic router failure detection mechanism (ARF-D) to wait for a timeout.",
        "C. There may accidentally be more than one default router in which case a default router election has to be done on the network in order to choose one router as the default.",
        "D. The Linux Kernel Routing Daemon (LKRD) is not running and should be started using its init script or systemd unit.",
        "E. DNS resolution may not be working as route by default tries to resolve names of routers and destinations and may run into a timeout.",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 5, /*QUESTION 9 */
        question:`What is true about the Hop Limit field in the IPv6 header?`,
        choices:["A. The field is not changed during the transport of a package.",
        "B. The field is transmitted within a hop-by-hop extension header.",
        "C. Each router forwarding the packet increases the field's value.",
        "D. Each router forwarding the packet decreases the field's value.",
        "E. For multicast packages, the field's value is always 1.",],
        answers1:"D"
      },
      {
        qtyp:"scf",
        counts: 6, /*QUESTION 12 */
        question:`How many IP addresses can be used for unique hosts inside the IPv4 subnet 192.168.2.128/26?`,
        choices:["A. 33",
        "B. 14",
        "C. 30",
        "D. 62",
        "E. 126",],
        answers1:"D"
      },
      {
        qtyp:"scf",
        counts: 7, /*QUESTION 15 */
        question:`Which of the following statements is true if the UID of a regular user is identical to the GID of a group?`,
        choices:["A. UID have precedence over GIDs, therefore the user is available while the group doesn't.",
        "B. The user as well as the group are not available to avoid ambiguity due to the ID conflict.",
        "C. UIDs and GIDs are independent of each other, therefore the user as well as the group are still available.",
        "D. The user is the only member of the group, even if the group configuration contains other members.",
        "E. GIDs have precedence over UIDs, therefore the group is available while the user isn't.",],
        answers1:"C"
      },
      {
        qtyp:"scf",
        counts: 8, /*QUESTION 16 */
        question:`Which of the following information is stored in /etc/shadow for each user?`,
        choices:["A. The timestamp of the user's last login",
        "B. The user's private SSH keys",
        "C. The hashed password of the user",
        "D. The numerical user ID (UID)",
        "E. The path to the user's home directory",],
        answers1:"C"
      },
      {
        qtyp:"scf",
        counts: 9, /*QUESTION 17 */
        question:`Which of the following commands shows all active systemd timers?`,
        choices:["A. systemctl-timer show",
        "B. timectl list",
        "C. systemctl -t",
        "D. systemctl list-timers",
        "E. timeq",],
        answers1:"D"
      },
      {
        qtyp:"scf",
        counts: 10, /*QUESTION 21 */
        question:`What is true about the file /etc/localtime?`,
        choices:["A. It is a plain text file containing a string such as Europe/Berlin",
        "B. It is created and maintained by the NTP service based on the location of the system's IP address.",
        "C. It is a symlink to /sys/device/clock/ltime and always contains the current local time.",
        "D. After changing this file, newtzconfighas to be run to make the changes effective.",
        "E. It is either a symlink to or a copy of a timezone information file such as /usr/share/zoneinfo/Europe/Berlin.",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 11, /*QUESTION 22 */
        question:`Which of the following statements is true regarding systemd timer units?`,
        choices:["A. Timer units can only be defined within a service unit's file.",
        "B. The command executed by the timer is specified in the timer unit's [Cmd] section.",
        "C. A dedicated system service, systemd-cron, handles the execution of timer units.",
        "D. Timer units only exist in the system scope and are not available for users.",
        "E. Each systemd timer unit controls a specific systemd service unit.",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 12, /*QUESTION 24 */
        question:`Which of the following commands should be executed when starting a login shell in order to change
        the language of messages for an internationalized program to Portuguese (pt)?`,
        choices:['A. export LANGUAGE=“pt"',
        'B. export LC_MESSAGES=“pt"',
        'C. export UI_MESSAGES=“pt"',
        'D. export MESSAGE=“pt"',
        'E. export ALL_MESSAGES=“pt"',],
        answers1:"B"
      },
      {
        qtyp:"scf",
        counts: 13, /*QUESTION 25 */
        question:`Which of the following files assigns a user to its primary group?`,
        choices:["A. /etc/pgroup",
        "B. /etc/shadow",
        "C. /etc/passwd",
        "D. /etc/group",
        "E. /etc/gshadow",],
        answers1:"C"
      },
      {
        qtyp:"scf",
        counts: 14, /*QUESTION 26 */
        question:`Which of the following steps prevents a user from obtaining an interactive login session?`,
        choices:["A. Setting the UID for the user to 0.",
        "B. Running the command chsh -s /bin/false with the user name.",
        "C. Removing the user from the group staff.",
        "D. Adding the user to /etc/noaccess.",
        "E. Creating a .nologin file in the user's home directory.",],
        answers1:"B"
      },
      {
        qtyp:"scf",
        counts: 15, /*QUESTION 30 */
        question:`Which option in the chrony configuration file changes the initial interval of polls to a NTP server in order
        to speed up the initial synchronization?`,
        choices:["A. iburst",
        "B. quickstart",
        "C. fast",
        "D. fsync",
        "E. flood",],
        answers1:"A"
      },
      {
        qtyp:"scf",
        counts: 16, /*QUESTION 31 */
        question:`Which of the following commands is used to rotate, compress, and mail system logs?`,
        choices:["A. logrotate",
        "B. striplog",
        "C. syslogd --rotate",
        "D. rotatelog",
        "E. logger",],
        answers1:"A"
      },
      {
        qtyp:"scf",
        counts: 17, /*QUESTION 32 */
        question:`Why is the correct configuration of a system's time zone important?`,
        choices:["A. Because the timezone is included in checksum calculations and timezone changes invalidate existing checksums.",
        "B.  Because the time zone is saved as part of the modification times of files and cannot be changed after a file is created.",
        "C. Because the environment variables LANG and LC_MESSAGES are, by default, set according to the time zone.",
        "D. Because NTP chooses servers nearby based on the configured time zone.",
        "E. Because the conversion of Unix timestamps to local time relies on the time zone configuration.",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 18, /*QUESTION 35 */
        question:`Which of the following commands lists all queued print jobs?`,
        choices:["A. lpd",
        "B. lpr",
        "C. lp",
        "D. lsq",
        "E. lpq",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 19, /*QUESTION 36 */
        question:`Which of the following entries in /etc/syslog.conf writes all mail related events to the file /var/log/maillog
        and sends all critical events to the remote server logger.example.com?`,
        choices:["A. mail.* /var/log/maillog \n mail,crit @logger.example.org",
        "B. mail.* /var/log/maillog \n mail.crit syslog://logger.example.org",
        "C. mail /var/log/maillog \n mail.crit @logger.example.org",
        "D. mail.* /var/log/maillog \n mail.crit @logger.example.org",
        "E. mail * /var/log/maillog \n mail crit @logger.example.org",],
        answers1:"D"
      },
      {
        qtyp:"scf",
        counts: 20, /*QUESTION 38 */
        question:`Which of the following protocols is related to the term open relay?`,
        choices:["A. SMTP",
        "B. POP3",
        "C. NTP",
        "D. IMAP",
        "E. LDAP",],
        answers1:"A"
      },
      {
        qtyp:"scf",
        counts: 21, /*QUESTION 39 */
        question:`Which of the following commands displays all environment and shell variables?`,
        choices:["A. getargs",
        "B. lsenv",
        "C. ls",
        "D. env",
        "E. lsshell",],
        answers1:"D"
      },
      {
        qtyp:"scf",
        counts: 22, /*QUESTION 41 */
        question:`What information is provided by the echo $$ command?`,
        choices:["A. The process ID of the current shell.",
        "B. The process ID for the following command.",
        "C. The process ID of the last command executed.",
        "D. The process ID of the last command which has been placed in the background.",
        "E. The process ID of the echo command.",],
        answers1:"A"
      },
      {
        qtyp:"scf",
        counts: 23, /*QUESTION 42 */
        question:`Which command makes the shell variable named VARIABLE visible to subshells?`,
        choices:["A. export $VARIABLE",
        "B. env VARIABLE",
        "C. set $VARIABLE",
        "D. set VARIABLE",
        "E. export VARIABLE",],
        answers1:"E"
      },

      {
        qtyp:"scf",
        counts: 24, /*QUESTION 43 */
        question:`What output is produced by the following command sequence?
        echo '1 2 3 4 5 6' | while read a b c; do
          echo result: $c $b $a; done`,
        choices:["A. result: 6 5 4",
        "B. result: 1 2 3 4 5 6",
        "C. result: 3 4 5 6 2 1",
        "D. result: 6 5 4 3 2 1",
        "E. result: 3 2 1",],
        answers1:"C"
      },
      {
        qtyp:"scf",
        counts: 25, /*QUESTION 44 */
        question:`Which of the following configuration files should be modified to globally set shell variables for all
        users?`,
        choices:["A. /etc/profile",
        "B. /etc/bashrc",
        "C. ~/.bash_profile",
        "D. /etc/.bashrc",
        "E. /etc/shellenv",],
        answers1:"A"
      },
      {
        qtyp:"scf",
        counts: 26, /*QUESTION 45 */
        question:`What output does the command seq 10 produce?`,
        choices:["A. A continuous stream of numbers increasing in increments of 10 until the command is stopped.",
        "B. It creates no output because a second parameter is missing.",
        "C. The number 0 through 9 with one number per line.",
        "D. The number 10 to standard output.",
        "E. The numbers 1 through 10 with one number per line.",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 27, /*QUESTION 47 */
        question:`Which of the following commands can be used to limit the amount of memory a user may use?`,
        choices:["A. umask",
        "B. usermod",
        "C. passwd",
        "D. ulimit",
        "E. chage",],
        answers1:"D"
      },
      {
        qtyp:"scf",
        counts: 28, /*QUESTION 48 */
        question:`What is a purpose of an SSH host key?`,
        choices:["A. It must be sent by any SSH client in addition to a user key in order to identify the client's host.",
        "B. It is root key by which all user SSH keys must be signed.",
        "C. It provides the server's identity information to connecting SSH clients.",
        "D. It authenticates any user that logs into a remote machine from the key's host.",
        "E. It is used by system services like cron, syslog or a backup job to automatically connect to remote hosts.",],
        answers1:"C"
      },
      {
        qtyp:"scf",
        counts: 29, /*QUESTION 49 */
        question:`What is the purpose of TCP wrapper?`,
        choices:["A. Manage and adjust bandwidth used by TCP services.",
        "B. Bind a network service to a TCP port.",
        "C. Encapsulate TCP messages in IP packets.",
        "D. Add SSL support to plain text TCP services.",
        "E. Limit access to a network service.",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 30, /*QUESTION 51 */
        question:`Which configuration file contains the default options for SSH clients?`,
        choices:["A. /etc/ssh/sshd_config",
        "B. /etc/ssh/ssh",
        "C. /etc/ssh/ssh_config",
        "D. /etc/ssh/client",
        "E. /etc/ssh/ssh_client",],
        answers1:"C"
      },
      {
        qtyp:"scf",
        counts: 31, /*QUESTION 52 */
        question:`Depending on a system's configuration, which of the following files can be used to enable and disable
        network services running on this host?`,
        choices:["A. /etc/profile",
        "B. /etc/xinetd.conf",
        "C. /etc/ports",
        "D. /etc/services",
        "E. /etc/host.conf",],
        answers1:"B"
      },
      {
        qtyp:"scf",
        counts: 32, /*QUESTION 53 */
        question:`Which of the following commands can identify the PID or a process which opened a TCP port?`,
        choices:["A. ptrace",
        "B. strace",
        "C. debug",
        "D. lsof",
        "E. nessus",],
        answers1:"D"
      },
      {
        qtyp:"scf",
        counts: 33, /*QUESTION 56 */
        question:`Which of the following commands preloads and manages existing SSH keys that are used for
        automatic authentication while logging in to other machines using SSH?`,
        choices:["A. sshd",
        "B. ssh-keyring",
        "C. ssh-keygen",
        "D. ssh-pki",
        "E. ssh-agent",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 34, /*QUESTION 57 */
        question:`On a machine running several X servers, how do programs identify the different instances of the X11
        server?`,
        choices:["A. By a fixed UUID that is defined in the X11 configuration file.",
        "B. By a display name like :1 .",
        "C. By the name of the user that runs the X server like x11: bob.",
        "D. By a device name like /dev/X11/xservers/1.",
        "E. By a unique IPv6 address from the fe80::/64subnet.LDAP",],
        answers1:"B"
      },
      {
        qtyp:"scf",
        counts: 35, /*QUESTION 58 */
        question:`What is the purpose of a screen reader?`,
        choices:["A. It manages virtual keyboards on touch screen displays.",
        "B. It reads the parameters of the attached monitors and creates an appropriate X11 configuration.",
        "C. It displays lines and markers to help people use speed reading techniques.",
        "D. It manages and displays files that contain e-books.",
        "E. It reads displayed text to accommodate the needs of blind or visually impaired people.",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 36, /*QUESTION 59 */
        question:`The X11 configuration file xorg.conf is grouped into sections.
        How is the content of the section SectionName represented?`,
        choices:["A. It is placed in curly brackets as in Section SectionName {…}.",
        'B. It is placed between the tags <Section name=“SectionName"> and </Section>.',
        'C. It is placed between a line containing Section “SectionName" and a line containing EndSection.',
        'D. It is placed after the row [SectionName].',
        'E. It is placed after an initial unindented Section “SectionName" and must be indented by exactly one tab character.',],
        answers1:"C"
      },
      {
        qtyp:"scf",
        counts: 37, /*QUESTION 61 */
        question:`Where is the systemd journal stored?`,
        choices:["A. /var/jlog/and /var/jlogd/",
        "B. /proc/log/and /proc/klog/",
        "C. /run/log/journal/ or /var/log/journal/",
        "D. /var/log/syslog.binor /var/log/syslog.jrn",
        "E. /etc/systemd/journal/or /usr/lib/systemd/journal/",],
        answers1:"C"
      },
      {
        qtyp:"scf",
        counts: 38, /*QUESTION 62 */
        question:`Which of the following is true regarding the command sendmail?`,
        choices:["A. With any MTA, the sendmail command must be run periodically by the cron daemon.",
        "B. When using systemd, sendmail is an alias to relayctl.",
        "C. The sendmail command prints the MTA's queue history of which mails have been sent successfully.",
        "D. It is only available when the sendmail MTA is installed.",
        "E. All common MTAs, including Postfix and Exim, provide a sendmail command.",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 39, /*QUESTION 63 */
        question:`Which file inside the CUPS configuration directory contains the settings of the printers?`,
        choices:["A. cups-devices.conf",
        "B. snmp.conf",
        "C. printers.conf",
        "D. printcap.conf",
        "E. cupsd.conf",],
        answers1:"C"
      },
      {
        qtyp:"scf",
        counts: 40, /*QUESTION 67 */
        question:`What is true regarding the file ~/.forward?`,
        choices:["A. When configured correctly ~/.forward can be used to forward each incoming mail to one or more other recipients.",
        "B. After editing ~/.forward the user must run newaliases to make the mail server aware of the changes.",
        "C. Using ~/.forward, root may configure any email address whereas all other users may configure only their own addresses.",
        "D. As ~/.forward is owned by the MTA and not writable by the user, it must be edited using the editaliases command.",
        "E. By default, only ~/.forward files of users in the group mailq are processed while all other user's ~/.forward files are ignored.",],
        answers1:"A"
      },
      {
        qtyp:"scf",
        counts: 41, /*QUESTION 72 */
        question:`Which of the following situations is observed and corrected by an NTP client?`,
        choices:["A. The skew in time between the system clock and the computer's hardware clock.",
        "B. The physical location and the time zone configuration.",
        "C. Changes in the time zone of the current computer's location.",
        "D. Adjustment needed to support Daylight Saving Time.",
        "E. The skew in time between the system clock and the reference clock.",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 42, /*QUESTION 73 */
        question:`If an alias ls exists, which of the following commands updates the alias to point to the command ls -l
        instead of the alias's current target?`,
        choices:["A. set ls='ls -l'",
        "B. alias ls='ls -l'",
        "C. alias --force ls='ls -l'",
        "D. alias --update ls ls='ls -l'",
        "E. realias ls='ls -l'",],
        answers1:"B"
      },
      {
        qtyp:"scf",
        counts: 43, /*QUESTION 74 */
        question:`Which of the following commands puts the output of the command date into the shell variable mydate?`,
        choices:['A. mydate="date"',
        'B. mydate="exec date"',
        'C. mydate="$((date))"',
        'D. mydate="$(date)"',
        'E. mydate="${date}"',],
        answers1:"D"
      },
      {
        qtyp:"scf",
        counts: 44, /*QUESTION 75 */
        question:`What information is shown by the echo $? command?`,
        choices:["A. The process ID of the echo command.",
        "B. The exit value of the command executed immediately before echo.",
        "C. The process ID which will be used for the next command.",
        "D. The exit value of the echo command.",
        "E. The process ID of the current shell.",],
        answers1:"B"
      },
      {
        qtyp:"scf",
        counts: 45, /*QUESTION 76 */
        question:`Which of the following files is not read directly by a Bash login shell?`,
        choices:["A. ~/.bashrc",
        "B. ~/.bash_profile",
        "C. ~/.bash_login",
        "D. ~/.profile",
        "E. /etc/profile",],
        answers1:"A"
      },
      {
        qtyp:"scf",
        counts: 46, /*QUESTION 77 */
        question:`What is true about the file .profile in a user's home directory?`,
        choices:["A. It must be executable.",
        "B. It must call the binary of the login shell.",
        "C. It must use a valid shell script syntax.",
        "D. It must start with a shebang.",
        "E. It must be readable for its owner only.",],
        answers1:"C"
      },
      {
        qtyp:"scf",
        counts: 47, /*QUESTION 79 */
        question:`What output does the command seq 1 5 20 produce?`,
        choices:["A. 1 5 10 15",
        "B. 1 6 11 16",
        "C. 1 2 3 4",
        "D. 2 3 4 5",
        "E. 5 10 15 20",],
        answers1:"B"
      },
      {
        qtyp:"scf",
        counts: 48, /*QUESTION 80 */
        question:`Which of the following commands lists all defines variables and functions within Bash?`,
        choices:["A. env",
        "B. export",
        "C. env -a",
        "D. set",
        "E. echo $ENV",],
        answers1:"D"
      },
      {
        qtyp:"scf",
        counts: 49, /*QUESTION 81 */
        question:`Which command is used to set restrictions on the size of a core file that is created for a user when a
        program crashes?`,
        choices:["A. core",
        "B. edquota",
        "C. quota",
        "D. ulimit",
        "E. ktrace",],
        answers1:"D"
      },
      {
        qtyp:"scf",
        counts: 50, /*QUESTION 83 */
        question:`How do shadow passwords improve the password security in comparison to standard no-shadow
        password?`,
        choices:["A. Regular users do not have access to the password hashes of shadow passwords.",
        "B. Every shadow password is valid for 45 days and must be changed afterwards.",
        "C. The system's host key is used to encrypt all shadow passwords.",
        "D. Shadow passwords are always combined with a public key that has to match the user's private key.",
        "E. Shadow passwords are stored in plain text and can be checked for weak passwords.",],
        answers1:"A"
      },
      {
        qtyp:"scf",
        counts: 51, /*QUESTION 84 */
        question:`After editing the TCP wrapper configuration to grant specific hosts access to a service, when do these
        changes become effective?`,
        choices:["A. The new configuration becomes effective after restarting the respective service.",
        "B. The new configuration becomes effective at the next system reboot.",
        "C. The new configuration becomes effective when the last established connection to the service is closed.",
        "D. The new configuration becomes effective after restarting the tcpd service.",
        "E. The new configuration becomes effective immediately for all new connections.",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 52, /*QUESTION 86 */
        question:`Which of the following commands finds all files owned by root that have the SetUID bit set?`,
        choices:["A. find / -user root -perm -4000",
        "B. find / -user 0 -mode +s",
        "C. find / -owner root -setuid",
        "D. find / -owner 0 -permbits 0x100000000",
        "E. find / --filter uid=1 --filter pers=u+s",],
        answers1:"A"
      },
      {
        qtyp:"scf",
        counts: 53, /*QUESTION 89 */
        question:`Which mechanism does ssh use to interact with the SSH agent?`,
        choices:["A. Connecting to port 2222 which is used by the system-wide SSH agent.",
        "B. Using the fixed socket .ssh-agent/ipc.",
        "C. Creating an alias replacing ssh with calls to ssh-agent.",
        "D. Starting ssh-agent as a child process for each ssh invocation.",
        "E. Evaluating environment variables such as SSH_AUTH_SOCK.",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 54, /*QUESTION 91 */
        question:`Which of the following is true about IPv6?`,
        choices:["A. IPv6 no longer supports broadcast addresses.",
        "B. With IPv6, the TCP port numbers of most services have changed.",
        "C. IPv4 addresses can be used without any change with IPv6.",
        "D. IPv6 no longer supports multicast addresses.",
        "E. For IPv6, UDP and TCP have been replaced by the Rapid Transmission Protocol RTP.",],
        answers1:"A"
      },
      {
        qtyp:"scf",
        counts: 55, /*QUESTION 92 */
        question:`What is true about the following command?
        nmcli device wifi connect WIFIoI`,
        choices:["A. NetworkManager opens a new public hotspot with the SSID WIFIoI.",
        "B. NetworkManager creates an unconfigured new virtual network interface named WIFIoI.",
        "C. NetworkManager creates a new wifi connection WIFIoI and activates it.",
        "D. NetworkManager returns an error in case the connection WIFIoI does not exist.",
        "E. NetworkManager returns an error because WIFIoI is an invalid wifi device.",],
        answers1:"C"
      },
      {
        qtyp:"scf",
        counts: 56, /*QUESTION 93 */
        question:`Which of the commands below might have produced the following output?`,
        choices:["A. dig -t mx www.example.org",
        "B. dig www.example.org",
        "C. dig -t ns www.example.org",
        "D. dig -t a www.example.org",
        "E. dig -t soa www.example.org",],
        answers1:"C"
      },
      {
        qtyp:"scf",
        counts: 57, /*QUESTION 98 */
        question:`How does the ping command work by default?`,
        choices:["A. Is sends an ICMP Echo Request to a remote host and waits to receive an ICMP Echo Response in return.",
        "B. It sends an ARP request to a remote host and waits to receive an ARP response in return.",
        "C. It sends a TCP SYN packet to a remote host and waits to receive an TCP ACK response in return.",
        "D. Is sends a broadcast packet to all hosts on the net and waits to receive, among others, a response from the target system.",
        "E. It sends a UDP packet to port 0 of the remote host and waits to receive a UDP error response in return.",],
        answers1:"A"
      },
      {
        qtyp:"scf",
        counts: 58, /*QUESTION 100 */
        question:`How would an outgoing packet to the destination 192.168.2.150 be handled?`,
        choices:["A. It would be passed to the default router 192.168.178.1 on wlan0.",
        "B. It would be directly transmitted on the device eth0.",
        "C. It would be passed to the default router 255.255.255.0 on eth0.",
        "D. It would be passed to the router 192.168.1.1 on eth0.",
        "E. It would be directly transmitted on the device wlan0.",],
        answers1:"D"
      },
      {
        qtyp:"scf",
        counts: 59, /*QUESTION 104 */
        question:`Which standardized TCP port is used by HTTPS services?`,
        choices:["A. 25",
        "B. 80",
        "C. 8080",
        "D. 443",
        "E. 636",],
        answers1:"D"
      },
      {
        qtyp:"scf",
        counts: 60, /*QUESTION 106 */
        question:`Which of the following commands sets the system's time zone to the Canadian Eastern Time?`,
        choices:["A. localegen -t -f /usr/share/zoneinfo/Canada/Eastern > /etc/locate.tz",
        "B. tzconf /etc/localtime",
        "C. sysctl -w clock.tz='Canada/Eastern'",
        "D. modprobe tz_ca_est",
        "E. ln -sf /usr/share/zoneinfo/Canada/Eastern /etc/localtime",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 61, /*QUESTION 108 */
        question:`How can a specific user be prevented from scheduling tasks with at?`,
        choices:["A. By adding the specific user to the /etc/at.allow file.",
        "B. By adding the specific user to the [deny] section in the /etc/atd.conf file.",
        "C. By adding the specific user to the nojobs group.",
        "D. By adding the specific user to the /etc/at.deny file.",
        "E. By executing the atd --deny [user] command.",],
        answers1:"D"
      },
      {
        qtyp:"scf",
        counts: 62, /*QUESTION 109 */
        question:`Which file contains the data of the last change of a user's password?`,
        choices:["A. /etc/gshadow",
        "B. /etc/passwd",
        "C. /etc/pwdlog",
        "D. /var/log/shadow",
        "E. /etc/shadow",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 63, /*QUESTION 111 */
        question:`Which of the following sections exists in a systemd timer unit?`,
        choices:["A. [Events]",
        "B. [Timer]",
        "C. [cron]",
        "D. [Schedule]",
        "E. [Trigger]",],
        answers1:"B"
      },
      {
        qtyp:"scf",
        counts: 64, /*QUESTION 112 */
        question:`Which of the following getent invocations lists all existing users?`,
        choices:["A. getent homes",
        "B. getent uids",
        "C. getent passwd",
        "D. getent users",
        "E. getent logins",],
        answers1:"C"
      },
      {
        qtyp:"scf",
        counts: 65, /*QUESTION 113 */
        question:`Given the following user's crontab entry:
        15 14 * * 1-5 /usr/local/bin/example.sh
       When will the script /usr/local/bin/example.sh be executed?`,
        choices:["A. At 14:15 local time, January till May.",
        "B. At 15:14 local time, 1st to 5th day of month.",
        "C. At 14:15 local time, February till June.",
        "D. At 14:15 local time, 1st to 5th day of month.",
        "E. At 14:15 local time, Monday to Friday",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 66, /*QUESTION 114 */
        question:`If neither cron.allow nor cron.deny exist in /etc/, which of the following is true?`,
        choices:["A. Without additional configuration, all users may create user specific crontabs.",
        "B. Without additional configuration, only root may create user specific crontabs.",
        "C. The cron daemon will refuse to start and report missing files in the system's logfile.",
        "D. When a user creates a user specific crontab the system administrator must approve it explicitly.",
        "E. The default settings of /etc/crond.conf define whether or not user specific crontabs are generally allowed or not.",],
        answers1:"B"
      },
      {
        qtyp:"scf",
        counts: 67, /*QUESTION 115 */
        question:`What is the purpose of the iconv command?`,
        choices:["A. It converts bitmap images from one format to another such as PNG to JPEG.",
        "B. It verifies that the root directory tree compiles to all conventions from the Filesystem Hierarchy Standard (FHS).",
        "C. It converts files from one character set to an other.",
        "D. It changes the mode of an inode in the ext4 filesystem.",
        "E. It displays additional meta information from icon files ending in .ico.",],
        answers1:"C"
      },
      {
        qtyp:"scf",
        counts: 68, /*QUESTION 116 */
        question:`Which character in the password field of /etc/passwd is used to indicate that the encrypted password
        is stored in /etc/shadow?`,
        choices:["A. *",
        "B. !",
        "C. s",
        "D. #",
        "E. x",],
        answers1:"E"
      },
      {
        qtyp:"scf",
        counts: 69, /*QUESTION 117 */
        question:`What does the term Braille Display refer to?`,
        choices:["A. A standardized high contract graphical theme for desktop applications?",
        "B. A Linux desktop environment similar to KDE and GNOME.",
        "C. A legacy display technology superseded by LCD.",
        "D. A physical representation of characters using small dots.",
        "E. A standard file format for data exchange, similar to XML.",],
        answers1:"D"
      },
      {
        qtyp:"scf",
        counts: 70, /*QUESTION 120 */
        question:`Which of the following protocols is designed to access the video card output of a virtual machine?`,
        choices:["A. KDE",
        "B. X11",
        "C. Xfce",
        "D. SPICE",
        "E. XDMCP",],
        answers1:"D"
      },

    ]
  }
  getAll():SingleChoiceFragen[]{
    return this.singlechoicefragen
  }
}
