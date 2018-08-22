function TabelaDinamica(){

  $.ajax({
      
   url:"batalhaTabela.csv",
   dataType:"text",
      
   success:function(data){
       
        var ranking_data = data.split(/\r?\n|\r/);
        var table_data = '<table class="table table-bordered table-striped">';
        var ranking = 1;
       
        for(var count = 0; count<ranking_data.length; count++){
            var cell_data = ranking_data[count].split(",");
            table_data += '<tr>';
            for(var cell_count=0; cell_count<cell_data.length; cell_count++){
                
                if(count == 0){
                    if(cell_count==0)
                        table_data += '<th>#</th>'
                    table_data += '<th>'+cell_data[cell_count]+'</th>';
                }
                else{
                    if(cell_count == 0){
                        table_data += '<td>'+ranking+'</td>';
                        ranking += 1;
                    }
                    table_data += '<td>'+cell_data[cell_count]+'</td>';
                }
            }
            
            table_data += '</tr>';
    }
    table_data += '</table>';
    $('#batalha').html(table_data);
   }
  });

 


}


