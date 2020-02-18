const axios = require('axios');
const Dev = require('../models/Dev');
const parserStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        const dev = await Dev.find();
        return res.json(dev);
    },
    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = apiResponse.data;
            const techsArray = parserStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
            dev = await Dev.create({
                name,
                avatar_url,
                bio,
                github_username,
                techs: techsArray,
                location
            });
        }
        return res.json(dev);
    },

    async update(req, res) {
        const github_username = req.headers.github_username;
        const { latitude, longitude, techs } = req.body;
        
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        const techsArrayUpdate = parserStringAsArray(techs);

        const dev = Dev.findOne({ github_username });
        
       if(dev){           
           await dev.updateOne({
              techs: techsArrayUpdate,
              location,
            });         
        }        

        res.json({ code: "200ok" });
    },

    async destroy(req, res){
        const github_username = req.headers.github_username;
        const { latitude, longitude, techs } = req.body;
        
        const dev = Dev.findOne({ github_username });
        
        if(dev){           
            await dev.deleteOne({ github_username });         
         }   
        
         res.json({ code: "200ok" });
    }
};