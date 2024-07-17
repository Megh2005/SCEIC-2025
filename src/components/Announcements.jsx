import React from "react";

const Announcements = () => {
  return (
    <>
      <section className="anouncements container">
        <h2>Important Dates</h2>
        <table>
          <thead>
            <tr>
              <th>Events</th>
              <th>Dates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abstract Submission Deadline</td>
              <td>7th September, 2024</td>
            </tr>
            <tr>
              <td>Notification of Acceptance of Abstract</td>
              <td>22nd September, 2024</td>
            </tr>
            <tr>
              <td>Full Paper Submission Deadline</td>
              <td>15th November, 2024</td>
            </tr>
            <tr>
              <td>Registration Start</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>Registration End</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>SCEIC 2025</td>
              <td>9th - 10th January 2025</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Announcements;
