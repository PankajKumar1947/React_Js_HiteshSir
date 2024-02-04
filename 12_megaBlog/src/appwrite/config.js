import conf from '../conf.js'

import { Client, Account, ID, Databases,Storage,Query } from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    //createpost method
    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,//slug is like unique id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }catch(error){
            console.log("Appwrite service :: createPost :: error",error);
        }
    }

    //update the post
    //here slug is passed for identifying the post by id or document id
    async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }catch(error){
            console.log("Appwrite service :: updatePost :: error",error);
        }
    }

    //deleting document.
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        }catch(error){
            console.log("Appwrite service :: deletePost :: error",error);
            return false;
        }
    }

    //getting only one post or only one document.
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }catch(error){
            console.log("Appwrite service :: getPost :: error",error);
            return false;
        }
    }

    //getting all the post whose status is active(use query) at a once : list document.
    async getPosts(queries=[Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                //note that querites can also be written in place of an argument.
                queries,
            )
        }catch(error){
            console.log("Appwrite service :: getPosts :: error",error);
            return false;
        }
    }

    //upload services:
    //file upload service
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),//unique id should be given not only file should be given
                file
            )
        }catch(error){
            console.log("Appwrite service :: uploadFile :: error",error);
            return false;
        }
    }
    // delete file
    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        }catch(error){
            console.log("Appwrite service :: deleteFile :: error",error);
            return false;
        }
    }

    //file preview
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service=new Service();

export default service;