interface Config {
  // Define here all environment variables
  DB: string;
}

export default <Config>{
  // Grab the envorinment variables from env
  DB: process.env.DB_URI,
};
