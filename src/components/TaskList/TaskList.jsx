import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="flex justify-start overflow-x-auto px-2 items-center
    flex-nowrap gap-5 h-[55%] w-full mt-10 py-5 "
    >{data.tasks.map((item, idx)=>{

      if(item.newTask){
         return<NewTask key={idx} data={item}/>
      }
       if(item.completed){
         return <CompleteTask key={idx} data={item}/>
      }
       if(item.active){
         return <AcceptTask key={idx} data={item}/>
      }
      if(item.failed){
         return  <FailedTask key={idx} data={item} />
      }
    })}
    </div>
  );
};

export default TaskList;
