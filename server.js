const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const app = express();

app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

// if (process.env.NODE_ENV === 'production') {
// 	app.use('/static', express.static(path.join(__dirname, 'client/build')));
// 	// app.use( express.static( 'client/build' ) );
// 	app.get('*', (req, res) => {
// 		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// 	});
// }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
