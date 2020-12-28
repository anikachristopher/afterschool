document.addEventListener("DOMContentLoaded", () => {
  fetchSchedules();
  addNewSchedule();
  // selectTables();
  const submitSchedule = document.querySelector("#create-schedule-button")
  const cancelSchedule = document.querySelector("#cancel-schedule")
  submitSchedule.addEventListener('submit', e => createSchedule(e))
  
});

const BASE_URL = "http://127.0.0.1:3000";

function fetchSchedules() {
  fetch(`${BASE_URL}/schedules`)
    .then((resp) => resp.json())
    .then((schedules) => {
      schedules["data"].forEach((schedule) => {
        //  console.log(schedule);
        //   debugger;
        let newScheduleCard = new Schedule(
          schedule.id,
          schedule.attributes.weekday,
          schedule.attributes.subject,
          schedule.attributes.content,
          schedule.attributes.child_id
        );
        //  debugger;
        //  newScheduleCard.createSchedule();
        newScheduleCard.renderSchedule();
      });
    });
}

function selectTables() {
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

function addNewSchedule() {
  let newScheduleBtn = document.querySelector("#create-schedule"); // identifies the button
  newScheduleBtn.addEventListener(
    "click",
    (event) => ShowScheduleModal(event),
    false
  ); // adds event listener to button and redirects to open modal function
}
function ShowScheduleModal() {
  // debugger;
  //references the modal in html
  const addScheduleModal = document.getElementById("add-modal");
  // opening the modal
  $(addScheduleModal).modal("show", {
    backdrop: "static",
  });
  // debugger;
  addScheduleModal.addEventListener("submit", createSchedule);
}

function createSchedule(e) {
  e.preventDefault()
  // debugger
  
  let childDay = e.target.querySelector("#weekday_id").value;
  let childSubject = e.target.querySelector("#subject_id").value;
  let childComment = e.target.querySelector('#content').value


  let childSchedule = {
    weekday: childDay,
    subject: childSubject,
    comment: childComment
  };  

  fetch(`${BASE_URL}/schedules`,{
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(childSchedule),
  })
  .then((resp) => resp.json())
  .then((s) => {
    // console.log(s)
    debugger
    const schedule = new Schedule(
      s.data.id,
      s.data.attributes.weekday,
      s.data.attributes.subject,
      s.data.attributes.content
    )

    schedule.renderSchedule();

  });

}

function deleteSchedule(id) {
  // debugger;
  fetch(`${BASE_URL}/schedules/${id}`, {
    type: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((resp) => resp.json())
    .then(schedule => { 
      // document.getElementById(`${id}`).innerHTML = "";
      document.getElementById(`${schedule.id}`.delete());
    });

}
