# Install

In `edge://extensions/` either load unpacked on this directory or pack this directory and drag and drop the crx file.

Developer mode need to be enabled in either case. Enabling developer mode will turn on a nag popup telling you to turn it off. The extension will not enable when you turn off developer mode. But after installing it'll show you the the extension id which you can use to add to the allow list to enable permanently even when developer mode is off.

reg add HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Edge\ExtensionInstallAllowlist /v 1 /d  dghoonfpelgjabhnjobepkbopihnemfi
reg add HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Edge\ExtensionInstallWhitelist /v 1 /d  dghoonfpelgjabhnjobepkbopihnemfi