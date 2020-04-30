// Interface to declare the variables as in model of the server
export interface IResponse{
   title: String;
   description: String;
   createdDate : Date;
   modifiedDate: Date;
   dueDate: Date;
   isCompleted : boolean;
   id: any;
}