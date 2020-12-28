class Schedule{
    constructor(id, weekday, subject, content, child_id){
        this.id = id
        this.weekday = weekday
        this.subject = subject
        this.content = content
        this.child_id = child_id
        // creating and initializing objects of this class
    }
    renderSchedule(){
// debugger;
        let mondayArea = document.getElementById("monday-table"); 
        let tuesdayArea = document.getElementById("tuesday-table"); 
        let wednesdayArea = document.getElementById("wednesday-table"); 
        let thursdayArea = document.getElementById("thursday-table"); 
        let fridayArea = document.getElementById("friday-table"); 

        let currentWeekday = this.weekday
    
        const weekday = currentWeekday;
        
        let area;

        switch (weekday) {
            case 'Monday':
              area = mondayArea.innerHTML += 
                  `<tr> <td> ${this.subject}</td> <td>${this.content}</td> <td><button id="monday-delete">
                  <p>Delete</p></button> </td></tr>`
              break;
            case 'Tuesday':
              area = tuesdayArea.innerHTML += 
                  `<tr> <td> ${this.subject}</td> <td>${this.content}</td> <td><button id="tuesday-delete">
                  <p>Delete</p></button></td></tr>`
              break;
            case 'Wednesday':
              area = wednesdayArea.innerHTML += 
                  `<tr> <td> ${this.subject}</td> <td>${this.content}</td> <td><button id="wednesday-delete">
                  <p>Delete</p></button></td></tr>`
              break;
            case 'Thursday':
              area = thursdayArea.innerHTML += 
                  `<tr> <td> ${this.subject}</td> <td>${this.content}</td> <td><button id="thursday-delete">
                  <p>Delete</p></button></td></tr>`
              break;
            case 'Friday':
              area = fridayArea.innerHTML += 
                  `<tr> <td> ${this.subject}</td> <td>${this.content}</td> <td><button id="friday-delete">
                  <p>Delete</p></button></td></tr>`
              break;
        }
      // this.selectTables()
    }

   selectTables() {
      mon = document.getElementById("monday-delete");
      tues = document.getElementById("tuesday-delete");
      wed = document.getElementById("wednesday-delete");
      thur = document.getElementById("thursday-delete");
      fri = document.getElementById("friday-delete");
      mon.addEventListener("click", deleteSchedule);
      tues.addEventListener("click", deleteSchedule);
      wed.addEventListener("click", deleteSchedule);
      thur.addEventListener("click", deleteSchedule);
      fri.addEventListener("click", deleteSchedule);
    }

  }
    

