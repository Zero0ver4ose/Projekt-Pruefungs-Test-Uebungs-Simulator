import { Injectable } from '@angular/core';
import { FillInFragen } from './fill-in-fragen';


@Injectable({
  providedIn: 'root'
})
export class FillInnFragenService {
fillinfragen: FillInFragen[]
  constructor() {

    this.fillinfragen = [
      {
        qtyp:"fillin",
        counts : 1, /**QUESTION 1 */
        question:`Which command is used to set the hostname of the local system? (Specify only the command without any
          path or parameters.)`,
        answer:`hostname`
      },{
        qtyp:"fillin",
        counts : 2, /**QUESTION 3 */
        question:`What command, depending on its options, can display the open TCP connections, the routing tables, as
        well as network interface statistics? (Specify only the command without any path or parameters.)`,
        answer:`netstat`
      },{
        qtyp:"fillin",
        counts : 3, /**QUESTION 4 */
        question:`Which command included in NetworkManager is a curses application which provides easy acces to the
        NetworkManager on the command line? (Specify only the command without any path or parameters.)`,
        answer:`nmtui`
      },{
        qtyp:"fillin",
        counts : 4, /**QUESTION 19 */
        question:`Which file, if present, must contain all users that are allowed to use the cron scheduling system? (Specify
          the full name of the file, including path.)`,
        answer:`/etc/cron.allow`
      },{
        qtyp:"fillin",
        counts : 5, /**QUESTION 27 */
        question:`Which command included in systemd supports selecting messages from the systemd journal by criteria
        such as time or unit name? (Specify only the command without any path or parameters.)`,
        answer:`journalctl`
      },{
        qtyp:"fillin",
        counts : 6, /**QUESTION 29 */
        question:`Which command must be run after adding a new email alias to the configuration in order to make this
        change effective? (Specify the command without any path but including all required parameters.)`,
        answer:`newaliases`
      },{
        qtyp:"fillin",
        counts : 7, /**QUESTION 33 */
        question:`Which command, available with all sendmail-compatible MTAs, is used to list the contents of the MTA's
        mail queue? (Specify only the command without any path or parameters.)`,
        answer:`mailq`
      },{
        qtyp:"fillin",
        counts : 8, /**QUESTION 34 */
        question:`What is the top-level directory which contains the configuration files for CUPS? (Specify the full path to
          the directory.)`,
        answer:`/etc/cups`
      },{
        qtyp:"fillin",
        counts : 9, /**QUESTION 37 */
        question:`Which option in the /etc/ntp.conf file specifies an external NTP source to be queried for time information?
        (Specify only the option without any values or parameters.)`,
        answer:`server`
      },{
        qtyp:"fillin",
        counts : 10, /**QUESTION 46 */
        question:`What command list the aliases defined in the current Bash shell? (Specify only the command without any
          path or parameters.)`,
        answer:`alias`
      },{
        qtyp:"fillin",
        counts : 11, /**QUESTION 54 */
        question:`When using X11 forwarding in SSH, what environment variable is automatically set in the remote shell in
        order to help applications to connect to the correct X11 server? (Specify only the environment variable
        without any additional commands or values.)`,
        answer:`DISPLAY`
      },{
        qtyp:"fillin",
        counts : 12, /**QUESTION 55 */
        question:`The presence of what file will temporarily prevent all users except root from logging into a system?
        (Specify the full name of the file, including path.)`,
        answer:`/etc/nologin`
      },{
        qtyp:"fillin",
        counts : 13, /**QUESTION 64 */
        question:`Which file is processed by newaliases? (Specify the full name of the file, including path.)`,
        answer:`/etc/aliases`
      },{
        qtyp:"fillin",
        counts : 14, /**QUESTION 71 */
        question:`Which command is used to sync the hardware clock to the system clock? (Specify only the command
          without any path or parameters.)`,
        answer:`hwclock`
      },{
        qtyp:"fillin",
        counts : 15, /**QUESTION 87 */
        question:`What command is used to add OpenSSH private keys to a running ssh-agent instance? (Specify the
          command name only without any path.)`,
        answer:`ssh-add`
      },{
        qtyp:"fillin",
        counts : 16, /**QUESTION 88 */
        question:`Which directory holds configuration files for xinetd services? (Specify the full path to the directory.)`,
        answer:`/etc/xinetd.d/`
      },{
        qtyp:"fillin",
        counts : 17, /**QUESTION 90 */
        question:`Which parameter of the ssh command specifies the location of the private key used for login attempts?
        (Specify only the option name without any values or parameters.)`,
        answer:`-i`
      },{
        qtyp:"fillin",
        counts : 18, /**QUESTION 94 */
        question:`Which parameter is missing in the command
        ip link set ____ dev eth0
      to activate the previously inactive network interface eth0? (Specify the parameter only without any
      command, path or additional options.)`,
        answer:`up`
      },{
        qtyp:"fillin",
        counts : 19, /**QUESTION 102 */
        question:`What command enables a network interface according to distribution-specific configuration, such as
        /etc/network/interfaces
      or
        /etc/sysconfig/network-scripts/ifcfg-eth0?
      (Specify only the command without any path or parameters.)`,
        answer:`ifup`
      },{
        qtyp:"fillin",
        counts : 20, /**QUESTION 107 */
        question:`What option to useradd creates a new user's home directory and provisions it with a set of standard files?
        (Specify only the option name without any values or parameters.)`,
        answer:`-m`
      },{
        qtyp:"fillin",
        counts : 21, /**QUESTION 118 */
        question:`Which environment variable is used by an X11 client to determine the X Server to connect to? (Specify
          only the variable name without any preceding commands or values.)`,
        answer:`DISPLAY`
      },
    ]
  }
  getAll():FillInFragen[]{
    return this.fillinfragen
  }
}
