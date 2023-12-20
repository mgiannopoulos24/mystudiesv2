import React from 'react';

const PrintableTable = ({ rows }) => {
  return (
    <div>
      <h2>Βαθμολογία</h2>
      <table>
        <thead>
          <tr>
            <th>Κωδικός</th>
            <th>Τίτλος</th>
            <th>Βαθμός</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((semester) =>
            semester.subjects.map((subjectRow) => (
              <tr key={subjectRow.id}>
                <td>{subjectRow.id}</td>
                <td>{subjectRow.title}</td>
                <td>{subjectRow.grade}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PrintableTable;