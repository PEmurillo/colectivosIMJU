$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .categoryItem[category="all"]').addClass('ct_itemActive');

        $('.categoryItem').click(function(){
            var catProduct = $(this).attr('category');
            console.log(catProduct);

            //AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO ================
            //$('.categoryItem').removeClass('ct_itemActive');
            //$(this).addClass('ct_itemActive');

            //OCULTANDO PRODUCTOS =============================================
            $('.product-item').hide();  
            //CAMBIAMOS COLOR DEL FONDO =======================================
            switch(catProduct) {
                case 'art':
                    $("body").css("background-color",'#98266d');
                     break;
                case 'emprende':
                    $("body").css("background-color",'#ec7715');
                  break;
                  case 'social':
                    $("body").css("background-color",'#86c4e2');
                  break;
                  case 'tech':
                    $("body").css("background-color",'#3f5485');
                  break; 
                  case 'eco':
                    $("body").css("background-color",'#3fa93b');
                  break;
                  case 'all':
                    $("body").css("background-color",'#2d3e50');
                  break;
                  default:
                    $("body").css("background-color",'#2d3e50');      
                  // code block
              }
                
            
            
            

            //MOSTRANDO PRODUCTOS =============================================
            $('.product-item[category="'+catProduct+'"]').show();
        });

        $('.categoryItem[category="all"]').click(function(){
            $('.product-item').show();
        });

    });