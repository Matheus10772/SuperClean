import express from 'express';

// routes
import home from '../routes/home';

const app = express();
//*************************************** */
app.use('/', home);

app.get('/', function () {
    console.log("Rota de teste");
 });

//*************************************** */

app.listen(3000, function () {
    console.log("Teste de servidor: OK");
});

