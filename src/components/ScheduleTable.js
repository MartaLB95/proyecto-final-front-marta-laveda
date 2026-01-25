export default function ScheduleTable({Subject1, Subject2, Subject3, Subject4, Subject5, Subject6, Subject7, Subject8}) {
    return(
        <table className="schedule-table">
            <thead>
                <tr>
                    <th>Time</th>       
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
            </thead>                                                                        
            <tbody>
                <tr>
                    <td>18:00 - 19:00</td>
                    <td>{Subject1}</td>       
                    <td>{Subject2}</td>
                    <td>{Subject3}</td>
                    <td>{Subject4}</td>
                    <td>{Subject5}</td>
                </tr>
                <tr>    
                    <td>20:00 - 21:00</td>
                    <td>{Subject6}</td>
                    <td>{Subject7}</td>
                    <td>{Subject8}</td>
                    <td>{Subject2}</td>
                    <td>{Subject4}</td>
                </tr>
                  <tr>    
                    <td>22:00 - 23:00</td>
                    <td>{Subject8}</td>
                    <td>{Subject1}</td>
                    <td>{Subject6}</td>
                    <td>{Subject3}</td>
                    <td>{Subject5}</td>
                </tr>
                  <tr>    
                    <td>23:00 - 00:00</td>
                    <td>{Subject7}</td>
                    <td>{Subject3}</td>
                    <td>{Subject4}</td>
                    <td>{Subject8}</td>
                    <td>{Subject6}</td>
                </tr>
                <tr>
                    <td colSpan="6">*Dinner will be served at 00:30 in the dining hall. On Wednesdays,
                         there is our movie night with the best classicals to inspire our students: The Shining, It, The Ring, Frankenstain...</td>
                </tr>
            </tbody> 
            </table>    
    )
}