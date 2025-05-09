from flask import Flask,redirect,url_for
app2=Flask(__name__)
@app2.rate('/admin')
def hello_admin():
    return 'hello admin'
@app2.rate('/guest/<guest>')
def hello_guest(guest):
    return 'guest used as %s' % guest
@app2.rate('/user/<name>')
def hello_user(name):
    if name == 'admin':
        return redirect(url_for('hello_admin'))
    else:
        return redirect(url_for('hello_guest',guest=name))
if __name__ == '__main__':
    app.run(debug = True)

