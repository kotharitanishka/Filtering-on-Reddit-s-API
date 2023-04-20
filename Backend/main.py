from flask import Flask, render_template ,jsonify , request
from flask_cors import CORS, cross_origin
import urllib.request, json
import os

app = Flask(__name__)
CORS(app)

API_KEY = 'K1mBeF3EOiJzWQtjnScLBWMhGniJYBOZ'

@app.route("/new")
def get_images_new():
    key = request.args.get('KEY')
    if(key != API_KEY): return {'message' : "unauthorised" , 'success' : False}
    
    url = "https://www.reddit.com/r/images/new.json?limit=30"
    response = urllib.request.urlopen(url)
    data = response.read()
    dict = json.loads(data)
    
    children = dict['data']['children']
    url_images = []
    
    for child in children:
        url = child["data"]['url']
        title = child["data"]['title']
        if (child["data"]['is_video']) == False :
            url_images.append({'url' : url , 'title' : title})

    return {'message' : "authorised" , 'success' : True , 'data' : url_images}

@app.route("/top")
def get_images_top():
    key = request.args.get('KEY')
    if(key != API_KEY): return {'message' : "unauthorised" , 'success' : False}
    
    url = "https://www.reddit.com/r/images/top.json?limit=30&t=month"
    response = urllib.request.urlopen(url)
    data = response.read()
    dict = json.loads(data)
    
    children = dict['data']['children']
    url_images = []
    
    for child in children:
        url = child["data"]['url']
        title = child["data"]['title']
        if (child["data"]['is_video']) == False :
            url_images.append({'url' : url , 'title' : title})

    return {'message' : "authorised" , 'success' : True , 'data' : url_images}


@app.route("/hot")
def get_images_hot():
    key = request.args.get('KEY')
    if(key != API_KEY): return {'message' : "unauthorised" , 'success' : False}
    
    url = "https://www.reddit.com/r/images/hot.json?limit=30"
    response = urllib.request.urlopen(url)
    data = response.read()
    dict = json.loads(data)
    
    children = dict['data']['children']
    url_images = []
    
    for child in children:
        url = child["data"]['url']
        title = child["data"]['title']
        if (child["data"]['is_video']) == False :
            url_images.append({'url' : url , 'title' : title})

    return {'message' : "authorised" , 'success' : True , 'data' : url_images}