export const taskController = {


    get(req, res, next) {
        res.get('Get Tasks')
    },

    getMany(req,res,next) {
        res.getMany('Get Tasks:/id')
    },

    create(req,res,next) {
        res.create('Create Tasks')
    },

    update(req, res, next) {
        res.update('Update Tasks:/id')
    },

    delete (req,res,next){ 
        res.delete('Delete Tasks')
    }

}