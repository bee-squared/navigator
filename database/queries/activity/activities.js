const db = require('../../index.js');

const getAllActivities = function() {
  return db.find({});
}

const addActivity = function(activity) {
  


  repos.forEach((repo) => {
    let newRepo = {
      id: repo.id,
      name: repo.name,
      url: repo.html_url,
      avatar: repo.owner.avatar_url,
      dateCreated: repo.created_at,
      dateUpdated: repo.updated_at
    }
    console.log(newRepo);
    let newRepoDoc = new Repo(newRepo);
    newRepoDoc.save();
  })
}

module.exports = {
  getAllActivities, addActivity
}