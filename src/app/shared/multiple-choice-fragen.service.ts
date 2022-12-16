import { Injectable } from '@angular/core';
import { MultiChoiceFragen } from './multi-choice-fragen';
@Injectable({
  providedIn: 'root'
})
export class MultipleChoiceFragenService {
  multichoicefragen: MultiChoiceFragen[];

  constructor() {

    this.multichoicefragen = [

      {
        qtyp:"mcf",
        counts: 1, /**QUESTION 7: */
        question: `Which of the following connection types,
        as seen in nmcli connection show, may exist in
        NetworkManager? (Choose three.) `,
        choices:["A. tcp","B. ethernet","C. wifi","D. ipv6","E. bridge"],
        answers:["B","C","E"],
        
      },
      {
        qtyp:"mcf",
        counts: 2, /*QUESTION 10:*/
        question: 'Which of the following nmcli subcommands exist? (Choose two.)',
        choices:["A. nmcli ethernet","B. nmcli device","C. nmcli wifi","D. nmcli address","E. nmcli connection"],
        answers:["B","E"]
      },
      {
        qtyp:"mcf",
        counts: 3, /*QUESTION 11:*/
        question: `Which of the following changes may occur as a consequence of using the command ip? (Choose
          three.)`,
          choices:["A. Network interfaces may become active or inactive.",
          "B. New name servers may be added to the resolver configuration.",
        "C. The system's host name may change.",
        "D. IP addresses may change.",
        "E. The routing table may change."],
        answers:["A","D","E"]
      },
   

      {
        qtyp:"mcf",
        counts: 4, /*QUESTION 13:*/
        question: `Which of the following IPv4 networks are reserved by IANA for private address assignment and private
        routing? (Choose three.) `,
        choices:["A. 10.0.0.0/8",
        "B. 127.0.0.0/8",
        "C. 169.255.0.0/16",
        "D. 172.16.0.0/12",
        "E. 192.168.0.0/16"],
        answers:["A","D","E"]
      },
      {
        qtyp:"mcf",
        counts: 5, /*QUESTION 14:*/
        question: `Which of the following commands configure network interfaces based on the system's existing
        distribution-specific configuration files? (Choose two.) `,
        choices:["A. ifconf",
        "B. ifdown",
        "C. ifpause",
        "D. ifstart",
        "E. ifup"],
        answers:["B","E"]
      }
      ,
      {
        qtyp:"mcf",
        counts: 6, /*QUESTION 18:*/
        question: `Which of the following tasks can the date command accomplish? (Choose two.)`,
        choices:["A. Set the system's date and time.",
        "B. Set the system's date but not the time.",
        "C. Calculate the time span between two dates.",
        "D. Print a calendar for a month or a year.",
        "E. Display time in a specific format."],
        answers:["A","E"]
      }
      ,
      {
        qtyp:"mcf",
        counts: 7, /*QUESTION 20:*/
        question: `What can be specified with useradd? (Choose two.)`,
        choices:["A. Commands the user can run using sudo.",
        "B. The absolute path to the user's home directory.",
        "C. Which printers are available for the new user.",
        "D. The SSH keys used to login to the new account.",
        "E. The numeric user ID (UID) of the user."],
        answers:["B","E"]
      }
      ,
      {
        qtyp:"mcf",
        counts: 8, /*QUESTION 23:*/
        question: `Which of the following fields are available in the standard format of both the global /etc/crontab file as
        well as in user-specific crontab files? (Choose two.)`,
        choices:["A. Year",
        "B. Minute",
        "C. Username",
        "D. Effective group ID",
        "E. Command"],
        answers:["B","E"]
      },
      {
        qtyp:"mcf",
        counts: 9, /*QUESTION 28:*/
        question: `Which of the following statements about systemd-journald are true? (Choose three.)`,
        choices:["A. It is incompatible with syslog and cannot be installed on a system using regular syslog.",
        "B. It only processes messages of systemd and not messages of any other tools.",
        "C. It can pass log messages to syslog for further processing.",
        "D. It maintains metadata such as _UID or _PID for each message.",
        "E. It supports syslog facilities such as kern, user, and auth."],
        answers:["C","D","E"]
      },
      {
        qtyp:"mcf",
        counts: 10, /* QUESTION 40 */
        question: `Which of the following comparison operators for test work on elements in the file system? (Choose
          two.)`,
          choices:["A. -z",
        "B. -eq",
        "C. -d",
        "D. -f",
        "E. -lt"],
        answers:["C","D"]
      },
      {
        qtyp:"mcf",
        counts: 11, /*QUESTION 50:*/
        question: `Given the following excerpt of the sudo configuration:
        Jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk
      Which of the following statements are true? (Choose three.)`,
      choices:["A. Jane can run /bin/id only after specifying her password.",
        "B. Jane can run /sbin/fdisk after specifying root's password.",
        "C. Jane can run /sbin/fdisk after specifying her password.",
        "D. Jane can run /bin/kill without specifying a password.",
        "E. Jane can run /bin/id without specifying her password."],
        answers:["C","D","E"]
      },
      {
        qtyp:"mcf",
        counts: 12, /*QUESTION 60:*/
        question: `Which of the following features are provided by SPICE? (Choose two.)`,
        choices:["A. Connecting local USB devices to remote applications.",
        "B. Accessing graphical applications on a remote host.",
        "C. Replacing Xorg as local X11 server.",
        "D. Downloading and locally installing applications from a remote machine.",
        "E. Uploading and running a binary program on a remote machine."],
        answers:["A","B"]
      },
      {
        qtyp:"mcf",
        counts: 13, /*QUESTION 65:*/
        question: `Which of the following are syslog facilities? (Choose two.)`,
        choices:["A. local5",
        "B. accounting",
        "C. mail",
        "D. postmaster",
        "E. remote"],
        answers:["A","C"]
      },
      {
        qtyp:"mcf",
        counts: 14, /*QUESTION 66:*/
        question: `Which of the following parameters are used for journalctl to limit the time frame of the output? (Choose
          two.)` ,
          choices:["A. --since=",
        "B. --from=",
        "C. --until=",
        "D. --upto=",
        "E. --date="],
        answers:["A","C"]
      },
      {
        qtyp:"mcf",
        counts: 15, /*QUESTION 68:*/
        question: `Which of the following commands display a list of jobs in the print queue? (Choose two.)`,
        choices:["A. cups --list",
        "B. lprm -l",
        "C. lpstat",
        "D. lpr -q",
        "E. lpq"],
        answers:["C","E"]
      },
      {
        qtyp:"mcf",
        counts: 16, /*QUESTION 69:*/
        question: `On a system using systemd-journald, which of the following commands add the message Howdy to
        the system log? (Choose two.)`,
        choices:["A. append Howdy",
        "B. logger Howdy",
        "C. systemd-cat echo Howdy",
        "D. echo Howdy > /dev/journal",
        "E. journalctl add Howdy"],
        answers:["B","C"]
      },
      {
        qtyp:"mcf",
        counts: 17, /*QUESTION 70:*/
        question: `Which of the following options in the chrony configuration file define remote time sources? (Choose
          two.)` ,
          choices:["A. source",
        "B. clock",
        "C. remote",
        "D. pool",
        "E. server"],
        answers:["D","E"]
      },
      {
        qtyp:"mcf",
        counts: 18, /*QUESTION 78:*/
        question: `What is true regarding the statement beginning with
        #!
      that is found in the first line of script? (Choose two.)`,
      choices:[ "A. It prevents the scripts from being executed until the ! is removed.",
        "B. It triggers the installation of the script's interpreter.",
        "C. It specifies the path and the arguments of the interpreter used to run the script.",
        "D. It defines the character encoding of the script.",
        "E. It is a comment that is ignored by the script interpreter."],
        answers:["C","E"]
      },
      {
        qtyp:"mcf",
        counts: 19, /*QUESTION 85:*/
        question: `What is true regarding public and private SSH keys? (Choose two.)`,
        choices:["A. For each user account, there is exactly one key pair that can be used to log into that account.",
        "B. The private key must never be revealed to anyone.",
        "C. Several different public keys may be generated for the same private key.",
        "D. To maintain the private key's confidentiality, the SSH key pair must be created by its owner.",
       "E. To allow remote logins, the user's private key must be copied to the remote server."],
        answers:["B","D"]
      },
      {
        qtyp:"mcf",
        counts: 20, /*QUESTION 95:*/
        question: `Which of the following states can NetworkManager show regarding the system's network connectivity?
        (Choose two.)`,
        choices:["A. up",
        "B. portal",
        "C. full",
        "D. login-required",
        "E. firewalled"],
        answers:["B","C"]
      },
      {
        qtyp:"mcf",
        counts: 21, /*QUESTION 96:*/
        question: `Which of the following are valid host addresses for the subnet 203.0.113.64/28? (Choose two.)`,
        choices:["A. 203.0.113.64",
        "B. 203.0.113.78",
        "C. 203.0.113.65",
        "D. 203.0.113.80",
        "E. 203.0.113.81"],
        answers:["B","C"]
      },
      {
        qtyp:"mcf",
        counts: 22, /*QUESTION 97:*/
        question: `Which of the following keywords can be used in the file /etc/resolv.conf? (Choose two.)`,
        choices:["A. substitute",
        "B. lookup",
        "C. search",
        "D. nameserver",
        "E. method"],
        answers:["C","D"]
      },
      {
        qtyp:"mcf",
        counts: 23, /*QUESTION 99:*/
        question: `Which of the following commands displays the number of bytes transmitted and received via the eth0
        network interface? (Choose two.)`,
        choices:["A. route -v via eth0",
        "B. ip stats show dev eth0",
        "C. netstat -s -i eth0",
        "D. ifconfig eth0",
        "E. ip -s link show eth0"],
        answers:["D","E"]
      },
      {
        qtyp:"mcf",
        counts: 24, /*QUESTION 101:*/
        question: `Which of the following commands will delete the default gateway from the system's IP routing table?
        (Choose two.)`,
        choices:["A. ifconfig unset default",
        "B. route del default",
        "C. ip route del default",
        "D. netstat -r default",
        "E. sysctl ipv4.default_gw=0"],
        answers:["B","C"]
      },
      {
        qtyp:"mcf",
        counts: 25, /*QUESTION 103:*/
        question: `What is true about NetworkManager on a Linux system that uses its distribution's mechanisms to
        configure network interfaces? (Choose two.)` ,
        choices:["A. NetworkManager reconfigures all network interfaces to use DHCP unless they are specifically managed by NetworkManager.",
        "B. NetworkManager must be explicitly enabled for each interface it should manage.",
        "C. NetworkManager by default does not change interfaces which are already configured.",
        "D. NetworkManager disables all interfaces which were not configured by NetworkManager.",
        "E. NetworkManager can be configured to use the distribution's network interface configuration."],
        answers:["C","E"]
      },
      {
        qtyp:"mcf",
        counts: 26, /*QUESTION 105:*/
        question: `Which of the following environment variables can be defined in locale.conf? (Choose two.)`,
        choices:["A. LC_ALL",
        "B. LC_USERNAME",
        "C. LC_UTF8",
        "D. LC_GEOGRAPHY",
        "E. LC_TIME"],
        answers:["A","E"]
      },
      {
        qtyp:"mcf",
        counts: 27, /*QUESTION 110:*/
        question: `Which of the following fields can be found in the /etc/group file? (Choose two.)`,
        choices:["A. The home directory of the group.",
        "B. The list of users that belong to the group.",
        "C. The name of the group.",
        "D. The default group ACL.",
        "E. The description of the group."],
        answers:["B","C"]
      },
      {
        qtyp:"mcf",
        counts: 28, /*QUESTION 119:*/
        question: `Which of the following tasks are handled by a display manager like XDM or KDM? (Choose two.)` ,
        choices:["A. Configure additional devices like new monitors or projectors when they are attached.",
        "B. Start and prepare the desktop environment for the user.",
        "C. Create an X11 configuration file for the current graphic devices and monitors.",
        " D. Lock the screen when the user was inactive for a configurable amount of time.",
        "E. Handle the login of a user."],
        answers:["B","E"]
      }

    ]
  }



  getAll():MultiChoiceFragen[] {
    return this.multichoicefragen
  }


}
