# TLDR

## links

- [install](https://flutter.dev/docs/get-started/install/linux)
  - I installed via the tar file, fk snapd
  - cd /wherever/you/keep/your/git/stuff && sudo tar xf ~/Downloads/flutter-whatever-the-version-is
    - /opt/bin should be in your path, not sure why linux doesnt do this by default
    - make sure to use absolute paths else you'll get `too many symbolic lnks`
  - sudo ln -s /abs/path/to/install/dir/flutter/bin/flutter /opt/bin/flutter
- [android studio](https://developer.android.com/studio)
  - [install](https://developer.android.com/studio/install)
