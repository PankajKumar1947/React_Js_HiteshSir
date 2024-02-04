import conf from '../conf/conf'

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client=new Client();// making client
    account;// declaring account variable to make an account.
    constructor(){
        //applying method on client
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        //creating account
        this.account=new Account(this.client);

    }

    // making account : createAccount() --> it is a promises.
    async createAccount({email,password,name}){
        try{
            const userAccount=  await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //call another method if a user exist already or user created successfully.
                return this.login({email,password});//directly call login if account is created.

            }else{
                //if account is not created successfully.
                return userAccount;
            }
        }catch(error){
            throw error;
        }
    }

    //login method.
    async login({email,password}){
        try{
            return await this.account.createEmailSession(email,password);
        }
        catch(error){
            throw error;
        }
    }

    //check user is logged in or not 
    async getCurrentUser(){
        try{
            return await this.account.get();

        } catch(error){
            console.log("Appwrite service :: getCurrentUser :: error",error);
        }

        return null;
    }

    //logout
    async logout(){
        try{
            await this.account.deleteSessions();

        } catch(error){
            console.log("Appwrite service :: logout :: error",error);
        }
    }
}

const authService=new AuthService();

export default authService;//exporting an object of AuthService class.