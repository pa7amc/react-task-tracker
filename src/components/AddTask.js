import { useState } from "react";

const AddTask = ({ onAdd }) => {
      const [text, setText] = useState("");
      const [day, setDay] = useState("");
      const [reminder, setReminder] = useState(false);

      const onSubmit = (e) => {
            //so it doesn't actually submit to a page
            e.preventDefault();
            //text is the piece connected to the first input
            if (!text) {
                  alert("please add a task");
                  return;
            }

            onAdd({ text, day, reminder });

            setText("");
            setDay("");
            setReminder(false);
      };

      return (
            <form className="add-form" onSubmit={onSubmit}>
                  <div className="form-control">
                        <label>Task</label>
                        <input
                              type="text"
                              placeholder="Add task"
                              value={text}
                              onChange={(e) => setText(e.target.value)}
                        ></input>
                  </div>
                  <div className="form-control">
                        <label>Day & Time</label>
                        <input
                              type="text"
                              placeholder="Add day & time"
                              value={day}
                              onChange={(e) => setDay(e.target.value)}
                        ></input>
                  </div>
                  {/* <div className="form-control form-control-check">
                        <label>Reminder</label>
                        <input
                              type="checkbox"
                              checked={reminder}
                              value={reminder}
                              onChange={(e) =>
                                    setReminder(e.currentTarget.checked)
                              }
                        ></input>
                  </div> */}

                  <input
                        type="submit"
                        className="btn btn-block"
                        value="Save task"
                  />
            </form>
      );
};

export default AddTask;
