---
title: Managing Python Virtual Environments with venv Module
date: "2019-08-07"
lastupdated: "2019-09-16"
spoiler: "Make use of the stdlib."
tags: ["python", "programming"]
posttype: "article"
---

<u>**Note**</u>: This article assumes you have python3.3+ and \*NIX system installed. Some commands might not work on Windows out of the box (e.g. tree).

If you are a Python developer (beginner or advanced), you are bound to come across having to manage your dependencies in projects in an efficient manner in order to prevent version conflicts between different packages. And you might already know about some tools built in order to do exactly that- virtualenv, virtualenvwrapper, pipenv, pyvenv, etc. But there is a fairly new tool that comes built-in with Python3 itself that can do almost everything that aforementioned tools can do and is much more elegant and easier to use than all of them, IMO.

The tool I'm talking about is the 'venv' module included in the stdlib of Python3.3+. You don't have to install anything on your machine to use it. Just navigate to your project folder and do:

```bash
$ python3 -m venv ./venv
```

Here, the second 'venv' is the name of the virtual environment we want to create.

Now, the project structure looks like:

```bash
$ tree -L 2
myproject/
	myproject/
		...
	venv/
		bin/
		include/
		lib/
		pyvenv.cfg
```

To activate the virtual environment, just do:

```bash
$ source ./venv/bin/activate
```

Note how activating a virtualenv modifies your shell prompt with a little note showing the name of the virtualenv. This means that the Python interpreter, libraries and scripts installed into it are isolated from those installed in other virtual environments, and (by default) in the “system” Python, leaving global environment and other virtualenvs unaffected:

```bash
(venv) $ python3 -m pip install django
(venv) $ python3 -m pip list
Django (2.2.6)
pip (9.0.1)
pytz (2019.3)
setuptools (39.0.1)
sqlparse (0.3.0)
...
(venv) $
```

To deactivate the virtual environment:

```bash
(venv) $ deactivate
```

To export your dependencies to an external file:

```bash
(venv) $ python3 -m pip freeze > requirements.txt
```

Deleting the virtual environment is as simple as deleting the 'venv' directory:

```bash
$ rm -rf ./venv
```

Make sure to deactivate the virtualenv before deleting it.

---

<u>**A quick aside**</u>: Before activating a virtual environment, the 'python' command maps to the system version of python interpreter:

```bash
$ which python3
/usr/bin/python3
```

But with an active virtual environment, the 'python' command maps to the interpreter binary inside the active virtualenv:

```bash
$ (venv) which python3
/home/$USERNAME/myproject/venv/bin/python3
```

---

##### Learn More:

[Official Python documentation on venv module](https://docs.python.org/3/library/venv.html).  
[Stack Overflow discussion on the topic](https://stackoverflow.com/questions/41573587/what-is-the-difference-between-venv-pyvenv-pyenv-virtualenv-virtualenvwrappe).  
[Why you should use python -m pip](https://snarky.ca/why-you-should-use-python-m-pip/).
