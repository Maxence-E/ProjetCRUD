var Advertisements = require('../model/model_Adv');

// create and save new advertisement
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new advertisement
    const adv = new Advertisements({
        jobName : req.body.jobName,
        location : req.body.location,
        salary: req.body.salary,
        description : req.body.description,
        detailed_description : req.body.detailed_description,
    })

    // save advertisement in the database
    adv
        .save(adv)
        .then(data => {
            //res.send(data)
            res.redirect('/add-advertisement');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Advertisements.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Advertisements.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}
