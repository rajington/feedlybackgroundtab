FeedlyPreviewWindow (based on FeedlyBackgroundTab)
===

Are you a power user on Feedly, but annoyed that the 'v' shortcut key opens articles in a focused tab?  This extension fixes that!

After installing this extension, when looking at an article in list view, simply press **;** and it will open in a new preview window. Any additional articles will be opened in the same preview window. This is perfect for large or multiple monitors and offers you a full "reading pane" for your articles.

Want to change your shortcut key?  Simply visit the options page.

**Want to donate or show your appreciation?**  Check out my [Kiva.org Team Page](https://www.kiva.org/team/aaron_saray_open_source_software_team) and join the team.
This isn't a donation - it's a loan from you to those in need.  You get paid back - continue the cycle to help support people in need.

*Note: This extension is but a few line changes from Aaron Saray's awesome [feedlybackgroundtab extension](https://github.com/aaronsaray/feedlybackgroundtab). This workflow is something I have sought for a long time, but I wouldn't have been able to do if Aaron hadn't open sourced and documented his extension so well.*

[Get the chrome extension here](https://chrome.google.com/webstore/detail/feedly-preview-window/oodgcldmocgdhjeibiphdlippflhiiea)

Changelog
---------
0.13.2
* drop previous workaround

0.13.1
* temporary workaround to [chromium issue](https://code.google.com/p/chromium/issues/detail?id=451820) where newly created tabs now gain window focus, for now the feedly window is refocused causing a slight flicker

0.13
* Fix for another style change.  Thanks @hudochenkov

0.12
* Fix for React-based layouts.  Thanks @BrianCS

0.11
* Fix for scenarios I hadn't thought of - like non-expanded article.  Thanks @BrianCS

0.10
* For some instances, the 0.9 fix wasn't working.  Did a fallback for a fix that hopefully fixes this issue

0.9
* Feedly changed their HTML - so updating the selectors (thanks @bval for help)

0.8
* fixed issue where it was breaking for some users - but kept card-view compat

0.7
* now works with the popup card views

0.6
* works on all Feedly URL schemes

0.5
* works for Feedly Pro

0.4
* works on cloudly.feedly now too

0.3
* modified the selector to pick the current article to include full article view

0.2
* allowed users to change their shortcut key in options
* changed default key to semi-colon
