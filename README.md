# api-server


## Branch : [Dev](https://github.com/RubaBanat/api-server/tree/dev)

## MONGODB_URI=mongodb+srv://ruba:0000@cluster0.ligjz.mongodb.net/datacollection?retryWrites=true&w=majority

---

## Feature requirement 

- create MongoDB 
- Create two routes for `Clothes` and `Food`
- Getting data for clothes and food from DB
- Add data for both routes IN DB
- Update data IN DB
- Delete data FROM DB

---


## UML 

![UML](imgs/uml1.jpg)

---

## Tests that assert your features:

- [Github-Acton](https://github.com/RubaBanat/api-server/actions)


- Coverage 

![coverage](imgs/lab4.png)


---


- [Pull-Request](https://github.com/RubaBanat/api-server/pull/5)
- [Heroku-deployment](https://ruba-api-server.herokuapp.com/)

---

## workflow

- `First` : 

- Deploy to Dev
- Complete an ACP on your dev branch.
- Go immediately to the repository on GitHub and open the actions tab
- You should see your tests running
- If they were passing on your local machine, they’ll also pass here
- Once your tests have passed, go to Heroku.com and look at your dev app’s Activity tab, it should show you an active deployment
When it completes, go to the Heroku app URL and open your server in the browser, you should see the same results as you saw locally.


- `Second`:


- Go to your repository on GitHub
- Open a pull request from dev to main
- If your tests are passing, you will be able to merge this branch
- Once you merge, the tests will run again using GitHub actions
- Once the tests pass, Heroku will deploy your “main” branch to your “production” app!
- When that process completes, open your app in the browser to prove it.


---

# THE END

