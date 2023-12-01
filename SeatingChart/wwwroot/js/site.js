






// var cols = [
//     { field: 'Column1', headerText: '1' },
//     { field: 'Test', headerText: '2' },
//     // Add more columns as needed
// ]; 

// //Meriwether Font From meeting. 




// var data = [
//     { Column1: student_list[0].firstName + " " + student_list[0].middleName + " " + student_list[0].lastName },
//     { Column1: student_list[2].firstName, Column2: student_list[1].firstName, Column3: "Value5" },  


//     // Add more data as needed
// ];   

var grid;

var numCols = 5;  

var columnNames = [ 'name' ];


var data = student_list.map(function(student) { return {name: student.firstName + " " + student.middleName + " " + student.lastName}});

ej.grids.Grid.Inject(ej.grids.Edit)


function createGrid() {
    var cols = []
 
    
    for (var i = 0; i < numCols; i++) {
        student_list
    }
 
    for (var i = 0; i < numCols; i++) {
        cols.push( { field: `Column${i+1}`, headerText: `${i+1}`, allowEditing: true } );
    }
    grid = new ej.grids.Grid({ 
        dataSource: data,
        columns: cols,
        editSettings: {allowEditing: true},
        gridLines: 'Both', 
        selectionSettings: {mode: 'Cell', cellSelectionMode: 'Box'},  
        actionBegin: (args) => {
            console.log(args.requestType)
            if(args.requestType == 'save') {
                alert(JSON.stringify(args.data))
            }
        }

        
        
    });
    grid.appendTo('#Grid');
}

function addRow() {
    var newRow = {};
    grid.dataSource.push(newRow);
    grid.refresh();
}

function deleteRow() {
    grid.dataSource.pop();
    grid.refresh();   
}

function addColumn() {
    // var newColumnName = prompt("Enter the name of the new column:");
    // if (newColumnName) {
        grid.destroy();
        numCols += 1;
        // cols.push({ field: newColumnName, headerText: newColumnName });
        createGrid();
    // }
}  
function Saving() { 
    grid.refresh();
}


function deleteColumn() {
    // var columnNameToDelete = prompt("Enter the name of the column to delete:");
    // if (columnNameToDelete) {
        grid.destroy();
        numCols -= 1;

        // cols = cols.filter(column => column.field !== columnNameToDelete);
        createGrid();
    // }
} 

createGrid();

document.getElementById('addRowBtn').addEventListener('click', addRow);
document.getElementById('deleteRowBtn').addEventListener('click', deleteRow);
document.getElementById('addColumnBtn').addEventListener('click', addColumn);
document.getElementById('deleteColumnBtn').addEventListener('click', deleteColumn); 
document.getElementById('saveBtn').addEventListener('click', Saving);