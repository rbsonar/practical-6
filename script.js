var app =  new function(){
    this.ele = document.getElementById('tasks')
    this.tasks=[]

    this.FetchAll = function(){
        var data='';
        console.log(this.tasks)

        if(this.tasks.length>0){
            for(i=0;i<this.tasks.length;i++)
            {
                data+='<tr>';
                data+='<td>'+(i+1)+'. '+this.tasks[i]+'</td>';
                data+='<td> <button onclick="app.Edit('+i+')"> Edit</button> </td>';
                data+='<td> <button onclick="app.Delete('+i+')"> Delete</button> </td>';
                data+='<tr>';
            }
        }
        this.Count(this.tasks.length);
        return this.ele.innerHTML = data
    };

    this.Add =function(){
        ele = document.getElementById('add');
        var task = ele.value;
        if(task){
            this.tasks.push(task.trim());
            ele.value='';
            this.FetchAll();
        }

    };

    this.Edit = function(item){
        ele = document.getElementById('edit-task');
        ele.value = this.tasks[item]  
        document.getElementById('edit-box').style.display = 'block';
        self = this;

        document.getElementById('save-edit').onsubmit = function(){
            var task= ele.value;
            if(task){
                self.tasks.splice(item, 1, task.trim())
                self.FetchAll();
                CloseInput();

            }
        }
    };

    this.Delete = function(item){

        this.tasks.splice(item,1)
        this.FetchAll(); 
    };


    this.Count = function(data){
        var ele = document.getElementById('counter');
        var name = 'tasks';
        if(data){
            if(data == 1)
            {
                name = 'task';
            }
            ele.innerHTML = data+' '+name;
        }
        else
        {
            ele.innerHTML = "No "+ name;
        }
    };

}

app.FetchAll();

function CloseInput(){
    document.getElementById('edit-box').style.display = 'none';

}