from flask import Flask
app1=Flask(__name__)
@app1.route('/blog/<int:postid>')
def show_blog(postid):
    return 'blog number is %d' % postid
@app1.route('/rev/<float:revnum>')
def rev_num(revnum):
    return 'reverse number is %f' % revnum
if __name__ == '__main__':
    print("flask app is starting...")
    app1.run(debug=True)