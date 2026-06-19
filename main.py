from flask import Flask, render_template

app = Flask(__name__) # Instância da classe Flask.


@app.route("/") # Inicia o Flask na URL digitada entre os parênteses.
def home():
    return render_template("home.html") # Busca o arquivo, dentro da página 'templates'

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/about_me")
def about_me():
    return render_template("about_me.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")