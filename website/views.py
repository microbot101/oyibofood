from flask import Blueprint, render_template

views = Blueprint('views', __name__)


@views.route('/home')
def home():
    return render_template("home.html")


@views.route('/base')
def landing_page():
    return render_template("base.html")


@views.route('/authentication')
def authentication():
    return render_template("authentication.html")


@views.route('/cart')
def cart():
    return render_template("cart.html")


@views.route('/checkout')
def checkout():
    return render_template("checkout.html")
