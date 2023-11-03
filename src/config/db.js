import "dotenv/config";
import { MongoClient } from "mongodb";

export default class Connect {

    static instance;
    connection = new MongoClient(process.env.URI_MONGODB);
    collectionName = "";
    dbName = "producion";
    db;

    static getInstance() {

        if(Connect.instance instanceof Connect) return Connect.instance;
        Connect.instance = new Connect;
        return Connect.instance;
    }

    changeCollection(name){
        this.collectionName = name
        return Connect.instance;
    }

    connect(){
        this.db = this.connection.db(this.dbName).collection(this.collectionName);
        return this.db;
    }

}