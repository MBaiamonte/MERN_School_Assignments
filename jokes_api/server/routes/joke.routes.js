const JokeController=require('../controllers/joke.controller');

module.exports=app=>{ //place all routes in here and set equal to an exported controller method
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.patch('/api/jokes/:id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/:id', JokeController.deleteExistingJoke);
    // app.delete('/api/jokes', JokeController.deleteExistingJoke);  // this one uses req.query to delete
}//end of route
