'use strict';

module.exports = function(Jugadorbanca) {
    Jugadorbanca.beforeRemote('create', function (context, jugadorbanca, next) {
        Jugadorbanca.find({where: {IdBanca:context.req.body.IdBanca,IdJugador:context.req.body.IdJugador}}, function (err, success) {
            if (err) {
                var err = new Error("No se pudo procesar la peticion");
                err.status = 422;
                delete err.stack;
                return next(err);
            } else {
                if(success.length>0){
                    context.res.send(success[0]);
                }else{
                    next();
                }
            }
        });
    });
};
