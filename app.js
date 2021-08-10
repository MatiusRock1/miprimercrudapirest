const express = require ('express');
const morgan = require ('morgan');
const mongoose = require ('mongoose');

const app = express();

//setings
app.set('port', process.env.PORT|| 3000);
//mongose

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex',true);
mongoose.set('useUnifiedTopology' , true);

mongoose.connect('mongodb+srv://MatiusRock:3CASL3u1Kpibt7Yi@cluster0.xglab.mongodb.net/myFirstDatabaseApiRest?retryWrites=true&w=majority')
.then(db => console.log('db conectada'))
.catch(err => console.log(err));

const indexRouters = require('./src/routers/index');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/',indexRouters);


app.use(morgan('dev'));

app.listen(app.get('port'),() =>{
    console.log(`Server on port ${app.get('port')}`);
})
