$(document).ready(function () {
  function createDemo(name){
    var container = $('#pagination-' + name);
    //  数据源
    var sources = function(){
      var result = [];

      for(var i = 1; i < 196; i++){
        result.push(i);
      }

      return result;
    }();

    var options = {
      dataSource: sources,
      className: 'paginationjs-theme-black',
      callback: function(response, pagination){
        window.console && console.log(response, pagination);

        var dataHtml = '<ul>';

        $.each(response, function(index, item){
          dataHtml += '<li>'+ item +'</li>';
        });

        dataHtml += '</ul>';

        //  渲染
        // container.prev().html(dataHtml);
      }
    };

    //$.pagination(container, options);

    container.addHook('beforeInit', function(){
      window.console && console.log('beforeInit...');
    });
    container.pagination(options);

    container.addHook('beforePageOnClick', function(){
      window.console && console.log('beforePageOnClick...');
      //return false
    });

    return container;
  }

  createDemo('demo1');
})
