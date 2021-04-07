from flask import Flask, render_template, url_for, request
from app import app

import requests, json

restaurants = [
    {
        'id': 1,
        'name': '1990 Vegan living',
        'address': 'Krossener Str. 19, 10245 Berlin', 
        'food_type': 'vegan',
        'google_reviews': 4.6,
        'foodora_delivery': True
    },
    {
        'id': 2,
        'name': 'Chay Village',
        'address': 'Niederbarnimstrasse 10, 10249 Berlin', 
        'food_type': 'vegetarian',
        'google_reviews': 4.5,
        'foodora_delivery': True
    },
    {
        'id': 3,
        'name': 'Gotcha',
        'address': 'Simon-Dach-Strasse 6, 10245 Berlin', 
        'food_type': 'vietnamese',
        'google_reviews': 4.4,
        'foodora_delivery': True
    },
    {
        'id': 4,
        'name': 'Portofino',
        'address': 'Gubener Str. 48, 10243 Berlin', 
        'food_type': 'italian',
        'google_reviews': 4.6,
        'foodora_delivery': False
    },
    {
        'id': 5,
        'name': 'Speisehaus Berlin',
        'address': 'Wuehlischstrasse 30, 10245 Berlin', 
        'food_type': 'german',
        'google_reviews': 4.3,
        'foodora_delivery': False
    }
]

@app.route('/')
def index():
    heading = "Python Tutorial"
    subheading1 = "This is the subheading of our page"
    foods1 = ['pasta','pizza','salad','dessert']
    print(url_for('static', filename='css/custom.css'))
    return render_template('index.html', foods = foods1, heading = heading, subheading = subheading1)


@app.route('/restaurants')
def restaurant():
    heading = "Amazing Restaurant Page"
    subheading1 = "Look at our yummy food"
    
    return render_template('restaurants.html', restaurants = restaurants, heading = heading, subheading = subheading1)

@app.route('/shopping')
def shopping():
    heading = "Amazing Restaurant Page"
    subheading1 = "Look at our yummy food"
    return render_template('shopping.html', restaurants = restaurants, heading = heading, subheading = subheading1)

@app.route('/randomusers')
def randos():
    heading = "APIs"
    subheading = "Access the Random User API"
    url = "https://randomuser.me/api/?results=5"
    
    response = requests.request("GET", url)
    print("response.status_code")
    print(response.status_code)
    print("response")
    print(response.__dict__)
    print("response.json")
    print(response.json())
    return render_template('randomusers.html', people = response.json(), heading = heading, subheading = subheading)
