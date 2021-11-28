DB_HOST = ""
DB_NAME = ""
DB_USER = ""
DB_PASSWORD = ""


try:
    from .settings_local import *
except ImportError:
    pass
