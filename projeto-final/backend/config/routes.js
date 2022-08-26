module.exports = app => {
    app.route("/users").post(app.api.user.save).get(app.api.user.get)

    app.route("/users/:id").put(app.api.user.save).get(app.api.user.getByID)

    app.route("/categories").get(app.api.categories.get).post(app.api.categories.save)

    app.route("/categories/:id").get(app.api.categories.getById).put(app.api.categories.save).delete(app.api.categories.remove)

}